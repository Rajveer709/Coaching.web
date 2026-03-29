import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { User, Mail, MessageSquare, Shield, ArrowLeft, Check, Trash2 } from "lucide-react";

// Type for message data
interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  read: boolean;
}

const Messages = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [adminCode, setAdminCode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("upscale-messages");
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        console.error("Failed to parse messages", e);
      }
    }
  }, []);

  // Listen for storage changes from other tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "upscale-messages") {
        if (e.newValue) {
          try {
            setMessages(JSON.parse(e.newValue));
          } catch (error) {
            console.error("Failed to parse messages from storage event", error);
          }
        } else {
          setMessages([]);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem("upscale-messages", JSON.stringify(messages));
  }, [messages]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminCode === "rajveer") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect admin code. Please try again.");
    }
  };

  const markAsRead = (id: string) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, read: true } : msg
    ));
  };

  const deleteMessage = (id: string) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };

  const markAllAsRead = () => {
    setMessages(messages.map(msg => ({ ...msg, read: true })));
  };

  const deleteAllMessages = () => {
    if (confirm("Are you sure you want to delete all messages?")) {
      setMessages([]);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Admin Login
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Input
                    type="password"
                    placeholder="Enter admin code..."
                    value={adminCode}
                    onChange={(e) => setAdminCode(e.target.value)}
                    className="w-full"
                  />
                  {error && (
                    <p className="text-sm text-destructive mt-2">{error}</p>
                  )}
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="mb-2"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-2xl sm:text-3xl font-bold">Customer Messages</h1>
            <p className="text-muted-foreground">
              Manage messages from website visitors
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              onClick={markAllAsRead}
              disabled={messages.length === 0 || messages.every(msg => msg.read)}
            >
              <Check className="h-4 w-4 mr-2" />
              Mark All Read
            </Button>
            <Button 
              variant="destructive" 
              onClick={deleteAllMessages}
              disabled={messages.length === 0}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete All
            </Button>
          </div>
        </div>

        {messages.length === 0 ? (
          <Card className="text-center py-12">
            <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Messages Yet</h3>
            <p className="text-muted-foreground">
              Messages from website visitors will appear here
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {messages.map((msg) => (
              <Card 
                key={msg.id} 
                className={!msg.read ? "border-primary shadow-md" : ""}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {msg.name}
                    </CardTitle>
                    <div className="flex gap-2">
                      {!msg.read && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => markAsRead(msg.id)}
                        >
                          Mark as Read
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        variant="destructive" 
                        onClick={() => deleteMessage(msg.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      {msg.email}
                    </div>
                    <span>{msg.timestamp}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={!msg.read ? "font-medium" : ""}>{msg.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
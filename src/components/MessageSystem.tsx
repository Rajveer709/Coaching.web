import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, X, Send, User, Mail, MessageSquare, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Admin code for accessing messages
const ADMIN_CODE = "rajveer";

// Type for message data
interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  read: boolean;
}

const MessageSystem = () => {
  const [isLockVisible, setIsLockVisible] = useState(true);
  const [isCodeDialogOpen, setIsCodeDialogOpen] = useState(false);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === ADMIN_CODE) {
      setIsCodeDialogOpen(false);
      setError("");
      setCode("");
      // Redirect to messages page instead of showing dialog
      window.open("/messages", "_blank");
    } else {
      setError("Incorrect admin code. Please try again.");
      setCode("");
    }
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("Please fill in all fields");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Create new message
    const newMessage: Message = {
      id: Date.now().toString(),
      name,
      email,
      message,
      timestamp: new Date().toLocaleString(),
      read: false
    };

    // Add to messages array
    setMessages([newMessage, ...messages]);
    setSuccess("Message sent successfully!");
    setError("");

    // Reset form
    setName("");
    setEmail("");
    setMessage("");

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <>
      {/* Lock Button */}
      {isLockVisible && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsCodeDialogOpen(true)}
          className="fixed bottom-4 right-4 p-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors z-50 shadow-lg"
          aria-label="Message System"
        >
          <Lock className="h-5 w-5" />
        </motion.button>
      )}

      {/* Code Entry Dialog */}
      <Dialog open={isCodeDialogOpen} onOpenChange={setIsCodeDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Admin Access
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCodeSubmit} className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Enter admin code..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full"
              />
              {error && (
                <p className="text-sm text-destructive mt-2">{error}</p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Access Messages
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Message Form */}
      <AnimatePresence>
        {isCodeDialogOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border rounded-lg p-6 max-w-md w-full shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Send us a message</h3>
                <button 
                  onClick={() => setIsCodeDialogOpen(false)}
                  className="p-1 rounded-full hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <form onSubmit={handleMessageSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <Input
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <Textarea
                    placeholder="Your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  />
                </div>
                
                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}
                
                {success && (
                  <p className="text-sm text-green-600">{success}</p>
                )}
                
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MessageSystem;
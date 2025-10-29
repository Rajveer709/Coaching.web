import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, X, Heart, Users, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const SECRET_CODE = "rajveer";

const SecretFeature = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState("");
  const [showProtest, setShowProtest] = useState(false);
  const [error, setError] = useState("");

  // SECRET_CODE is defined at the top level

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.toLowerCase() === SECRET_CODE) {
      setShowProtest(true);
      setIsOpen(false);
      setError("");
    } else {
      setError("Incorrect code. Try again!");
      setCode("");
    }
  };

  return (
    <>
      {/* Secret Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors z-50 shadow-lg"
        aria-label="Secret Feature"
      >
        <Lock className="h-5 w-5" />
      </button>

      {/* Code Entry Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enter Secret Code</DialogTitle>
            <DialogDescription>
              Enter the secret code to unlock a special message
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Enter code..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full"
              />
              {error && (
                <p className="text-sm text-destructive mt-2">{error}</p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Protest Modal */}
      <AnimatePresence>
        {showProtest && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowProtest(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-card border-2 border-primary rounded-lg p-8 max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center space-y-6">
                {/* Animated Heart */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="flex justify-center"
                >
                  <Heart className="h-16 w-16 text-primary fill-primary" />
                </motion.div>

                {/* Main Message */}
                <h2 className="text-4xl sm:text-5xl font-bold text-primary">
                  #BringBackSanjeevSir
                </h2>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  We, the students of Upscale Tuition, respectfully request the return of our beloved teacher, Sanjeev Sir. 
                  His dedication, teaching excellence, and genuine care for students made a profound impact on our learning journey.
                </p>

                {/* Reasons */}
                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium">500+ Students Support</p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium">Outstanding Feedback</p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium">Beloved by All</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    className="flex-1"
                    onClick={() => window.open("https://twitter.com/intent/tweet?text=We%20want%20Sanjeev%20Sir%20back%20at%20Upscale%20Tuition!%20%23BringBackSanjeevSir", "_blank")}
                  >
                    Share on Twitter
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setShowProtest(false)}
                  >
                    Close
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground italic">
                  "A good teacher can inspire hope, ignite the imagination, and instill a love of learning." - Brad Henry
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SecretFeature;

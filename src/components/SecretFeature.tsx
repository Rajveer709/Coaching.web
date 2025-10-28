import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

const SECRET_CODE = "SANJEEV";

const SecretFeature = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState("");
  const [showProtest, setShowProtest] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.toUpperCase() === SECRET_CODE) {
      setShowProtest(true);
      setError("");
      setIsOpen(false);
    } else {
      setError("Incorrect code. Try again!");
    }
  };

  return (
    <>
      {/* Fixed bottom button */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Button 
          variant="outline" 
          size="lg"
          className="rounded-full shadow-lg bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 transition-all group"
          onClick={() => setIsOpen(true)}
        >
          <Lock className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
          Enter Code for Secret
        </Button>
      </motion.div>

      {/* Secret Code Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">🔒 Enter the Secret Code</DialogTitle>
            <DialogDescription className="text-center">
              Unlock hidden content by entering the secret code.
              <br />
              <span className="text-xs opacity-70">Hint: Think of our beloved teacher's name</span>
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter code"
                className="text-lg h-12"
                autoFocus
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
            <Button type="submit" className="w-full">
              Unlock
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Protest Modal */}
      <AnimatePresence>
        {showProtest && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-background rounded-2xl p-8 max-w-2xl w-full relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 right-4"
                onClick={() => setShowProtest(false)}
              >
                <X className="h-5 w-5" />
              </Button>
              
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-primary">#BringBackSanjeevSir</h2>
                  <p className="text-sm text-muted-foreground">A movement by Upscale Tuition Students</p>
                </div>
                
                <motion.div 
                  className="text-6xl my-8"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [-5, 5, -5, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  ✊
                </motion.div>
                
                <p className="text-lg">
                  We, the students of Upscale Tuition, respectfully request the return of our beloved teacher, Sanjeev Sir. 
                  His unique teaching style and dedication have been invaluable to our learning journey.
                </p>
                
                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-medium mb-2">Why Sanjeev Sir is Special:</h3>
                  <ul className="text-sm text-left space-y-1 list-disc pl-5">
                    <li>Simplified complex concepts with real-world examples</li>
                    <li>Always available for extra help after class</li>
                    <li>Inspired students to love learning</li>
                    <li>Had a 98% student satisfaction rate</li>
                  </ul>
                </div>

                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Button variant="outline" asChild>
                    <a href="#" className="flex items-center gap-2">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                      Share on Twitter
                    </a>
                  </Button>
                  
                  <Button asChild>
                    <a href="#contact" className="flex items-center gap-2">
                      ✍️ Sign Petition
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SecretFeature;

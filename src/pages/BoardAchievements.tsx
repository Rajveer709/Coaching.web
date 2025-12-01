import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Play, Pause } from "lucide-react";
import classTenthVideo from "@/assets/class 10th.mp4";
import twelfthImage from "@/assets/12th.jpg";

const BoardAchievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-scroll between video and image based on video duration
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    const setupAutoScroll = () => {
      if (videoRef.current) {
        // When video ends, move to next slide
        videoRef.current.onended = () => {
          setCurrentIndex(prev => (prev + 1) % 2);
        };
        
        // Set up interval to check if video is not playing but should be
        interval = setInterval(() => {
          if (currentIndex === 0 && videoRef.current && videoRef.current.paused) {
            videoRef.current.play().catch(e => console.log("Auto-play prevented:", e));
          }
        }, 1000);
      }
    };

    setupAutoScroll();

    return () => {
      if (interval) clearInterval(interval);
      if (videoRef.current) {
        videoRef.current.onended = null;
      }
    };
  }, [currentIndex]);

  // Handle video play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(e => console.log("Play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    
    // If going to video, play it
    if (index === 0 && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log("Play failed:", e));
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Board <span className="text-orange-600">Achievements</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Celebrating our students' outstanding performance in 10th and 12th board examinations
          </p>
        </div>

        <Card className="overflow-hidden border border-orange-100 dark:border-orange-900/30 max-w-4xl mx-auto">
          <div className="relative">
            {/* Media Container */}
            <div className="relative overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {/* 10th Board Video */}
                <div className="min-w-full aspect-[3/4] rounded-lg overflow-hidden relative group">
                  <video 
                    ref={videoRef}
                    src={classTenthVideo}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                  
                  {/* Play/Pause Button Overlay */}
                  <button 
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {isPlaying ? (
                      <Pause className="h-12 w-12 text-white" />
                    ) : (
                      <Play className="h-12 w-12 text-white" />
                    )}
                  </button>
                </div>
                
                {/* 12th Board Photo */}
                <div className="min-w-full aspect-[3/4] rounded-lg overflow-hidden">
                  <img 
                    src={twelfthImage} 
                    alt="12th Board Achievements" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center mt-6 gap-4">
              <div className="flex items-center gap-2">
                {[0, 1].map((index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex 
                        ? 'bg-orange-600' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Achievement Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 text-center border border-orange-100 dark:border-orange-900/30">
            <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600 dark:text-gray-300">Overall Pass Percentage</div>
          </Card>
          
          <Card className="p-6 text-center border border-orange-100 dark:border-orange-900/30">
            <div className="text-4xl font-bold text-orange-600 mb-2">45+</div>
            <div className="text-gray-600 dark:text-gray-300">Students Scored Above 90%</div>
          </Card>
          
          <Card className="p-6 text-center border border-orange-100 dark:border-orange-900/30">
            <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Subject Excellence Rate</div>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Student <span className="text-orange-600">Success Stories</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border border-orange-100 dark:border-orange-900/30">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                  A
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Ananya Gupta</h3>
                  <p className="text-orange-600 dark:text-orange-400 text-sm mb-2">10th Board, 95.2%</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    "The personalized attention and structured study plans at Upscale Tuition helped me achieve my dream score. The faculty's dedication is truly commendable."
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border border-orange-100 dark:border-orange-900/30">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                  R
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Rohan Mehta</h3>
                  <p className="text-orange-600 dark:text-orange-400 text-sm mb-2">12th Board, 92.8%</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    "The comprehensive study material and regular assessments helped me identify my weak areas and improve consistently. I'm grateful for the support throughout my journey."
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardAchievements;
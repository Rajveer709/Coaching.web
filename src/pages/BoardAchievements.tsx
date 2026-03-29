import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Play, Pause } from "lucide-react";
import tenthVideo from "@/assets/10th.mp4";
import classTenthVideo from "@/assets/class 10th.mp4";
import twelfthImage from "@/assets/12th.jpg";

const BoardAchievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Media items - video first, then class video, then image
  const mediaItems = [
    {
      type: "video",
      src: tenthVideo,
      alt: "10th Board Results"
    },
    {
      type: "video",
      src: classTenthVideo,
      alt: "Class 10th Achievements"
    },
    {
      type: "image",
      src: twelfthImage,
      alt: "12th Board Achievements"
    }
  ];

  // Auto-scroll between media items based on video duration
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    const setupAutoScroll = () => {
      // Set up event listeners for all videos
      mediaItems.forEach((item, index) => {
        if (item.type === "video" && videoRefs.current[index]) {
          videoRefs.current[index]!.onended = () => {
            setCurrentIndex(prev => (prev + 1) % mediaItems.length);
          };
        }
      });
      
      // Set up interval to check if current video is not playing but should be
      interval = setInterval(() => {
        const currentItem = mediaItems[currentIndex];
        if (currentItem.type === "video" && videoRefs.current[currentIndex] && videoRefs.current[currentIndex]!.paused) {
          videoRefs.current[currentIndex]!.play().catch(e => console.log("Auto-play prevented:", e));
        }
      }, 1000);
    };

    setupAutoScroll();

    return () => {
      if (interval) clearInterval(interval);
      mediaItems.forEach((item, index) => {
        if (item.type === "video" && videoRefs.current[index]) {
          videoRefs.current[index]!.onended = null;
        }
      });
    };
  }, [currentIndex]);

  // Handle video play/pause
  const togglePlay = (index: number) => {
    if (videoRefs.current[index]) {
      if (videoRefs.current[index]!.paused) {
        videoRefs.current[index]!.play().catch(e => console.log("Play failed:", e));
        setIsPlaying(true);
      } else {
        videoRefs.current[index]!.pause();
        setIsPlaying(false);
      }
    }
  };

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    
    // If going to a video, play it
    if (mediaItems[index].type === "video" && videoRefs.current[index]) {
      videoRefs.current[index]!.currentTime = 0;
      videoRefs.current[index]!.play().catch(e => console.log("Play failed:", e));
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="mb-3">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-1.5 text-xs">
              <ArrowLeft className="h-2.5 w-2.5" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-4">
          <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1.5">
            Board <span className="text-orange-600">Achievements</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto text-[0.7rem]">
            Celebrating our students' outstanding performance in 10th and 12th board examinations
          </p>
        </div>

        <Card className="overflow-hidden border border-orange-100 dark:border-orange-900/30 max-w-lg mx-auto">
          <div className="relative">
            {/* Media Container */}
            <div className="relative overflow-hidden rounded">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {mediaItems.map((item, index) => (
                  <div 
                    key={index}
                    className="min-w-full aspect-[2/3] rounded overflow-hidden relative group"
                  >
                    {item.type === "video" ? (
                      <>
                        <video 
                          ref={(el) => (videoRefs.current[index] = el)}
                          src={item.src}
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                          onPlay={() => setIsPlaying(true)}
                          onPause={() => setIsPlaying(false)}
                        />
                        
                        {/* Play/Pause Button Overlay */}
                        <button 
                          onClick={() => togglePlay(index)}
                          className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {isPlaying && currentIndex === index ? (
                            <Pause className="h-5 w-5 text-white" />
                          ) : (
                            <Play className="h-5 w-5 text-white" />
                          )}
                        </button>
                      </>
                    ) : (
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center mt-2 gap-1">
              <div className="flex items-center gap-0.5">
                {mediaItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-1 h-1 rounded-full transition-colors ${
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
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-2 max-w-lg mx-auto">
          <Card className="p-2.5 text-center border border-orange-100 dark:border-orange-900/30">
            <div className="text-xl font-bold text-orange-600 mb-0.5">98%</div>
            <div className="text-gray-600 dark:text-gray-300 text-[0.65rem]">Overall Pass Percentage</div>
          </Card>
          
          <Card className="p-2.5 text-center border border-orange-100 dark:border-orange-900/30">
            <div className="text-xl font-bold text-orange-600 mb-0.5">45+</div>
            <div className="text-gray-600 dark:text-gray-300 text-[0.65rem]">Students Scored Above 90%</div>
          </Card>
          
          <Card className="p-2.5 text-center border border-orange-100 dark:border-orange-900/30">
            <div className="text-xl font-bold text-orange-600 mb-0.5">100%</div>
            <div className="text-gray-600 dark:text-gray-300 text-[0.65rem]">Subject Excellence Rate</div>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mt-5 max-w-lg mx-auto">
          <h2 className="text-base font-bold text-center mb-3 text-gray-900 dark:text-white">
            Student <span className="text-orange-600">Success Stories</span>
          </h2>
          
          <div className="grid grid-cols-1 gap-2.5">
            <Card className="p-2.5 border border-orange-100 dark:border-orange-900/30">
              <div className="flex items-start gap-1.5">
                <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 rounded-full h-7 w-7 flex items-center justify-center flex-shrink-0 text-[0.6rem]">
                  A
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-[0.7rem]">Ananya Gupta</h3>
                  <p className="text-orange-600 dark:text-orange-400 text-[0.55rem] mb-1">10th Board, 95.2%</p>
                  <p className="text-gray-600 dark:text-gray-300 text-[0.55rem]">
                    "The personalized attention and structured study plans at Upscale Academy helped me achieve my dream score. The faculty's dedication is truly commendable."
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-2.5 border border-orange-100 dark:border-orange-900/30">
              <div className="flex items-start gap-1.5">
                <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 rounded-full h-7 w-7 flex items-center justify-center flex-shrink-0 text-[0.6rem]">
                  R
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-[0.7rem]">Rohan Mehta</h3>
                  <p className="text-orange-600 dark:text-orange-400 text-[0.55rem] mb-1">12th Board, 92.8%</p>
                  <p className="text-gray-600 dark:text-gray-300 text-[0.55rem]">
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
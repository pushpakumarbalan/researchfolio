"use client"

import { useEffect, useRef, useState } from "react";

export default function VisitorMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    // Only run on client-side
    if (!containerRef.current) return;
    
    // Clear any existing content
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "mapmyvisitors";
    script.src = "https://mapmyvisitors.com/map.js?d=nQukqQ2FvPv-thOrNu-iSiXx0TOwRXHZMOhYGxJDABw&cl=ffffff&w=a";
    
    script.onload = () => {
      setIsLoading(false);
      setHasError(false);
    };
    
    script.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
    
    // Set a timeout to handle cases where the script loads but doesn't render
    const timeout = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 5000);
    
    containerRef.current.appendChild(script);
    
    return () => {
      clearTimeout(timeout);
      if (containerRef.current && script.parentNode) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center my-8">
      <div className="w-full max-w-[600px] relative">
        {isLoading && (
          <div className="w-full h-[300px] flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800">
            <div className="text-center">
              <div className="animate-pulse text-gray-400 dark:text-gray-500">Loading visitor map...</div>
            </div>
          </div>
        )}
        
        {hasError && (
          <div className="w-full h-[300px] flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <p className="mb-2">📍 Visitor map temporarily unavailable</p>
              <p className="text-sm">Please check your connection or try again later</p>
            </div>
          </div>
        )}
        
        <div 
          ref={containerRef} 
          className={`w-full min-h-[300px] ${isLoading || hasError ? 'hidden' : 'block'}`}
        />
      </div>
    </div>
  );
}
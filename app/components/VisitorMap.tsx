"use client"

import { useEffect, useRef } from "react";

export default function VisitorMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  
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
    script.src = "//mapmyvisitors.com/map.js?d=nQukqQ2FvPv-thOrNu-iSiXx0TOwRXHZMOhYGxJDABw&cl=ffffff&w=a";
    script.async = true;
    
    containerRef.current.appendChild(script);
    
    return () => {
      if (containerRef.current && script.parentNode) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center my-8">
      <div 
        ref={containerRef} 
        className="w-full max-w-[600px] h-[300px] border border-gray-200 dark:border-gray-700 rounded-md"
        style={{ minHeight: "300px" }}
      />
    </div>
  );
}
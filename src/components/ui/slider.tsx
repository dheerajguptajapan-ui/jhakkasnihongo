"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { cn } from "../../lib/utils"

interface SliderProps {
  value: number[]
  min: number
  max: number
  step: number
  onValueChange: (value: number[]) => void
  className?: string
}

export const Slider: React.FC<SliderProps> = ({
  value,
  min,
  max,
  step,
  onValueChange,
  className
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)
  
  const percentage = ((value[0] - min) / (max - min)) * 100

  const handleDrag = (event: any, info: any) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(info.point.x - rect.left, rect.width))
    const newPercentage = x / rect.width
    const rawValue = newPercentage * (max - min) + min
    
    // Snap to step
    const steppedValue = Math.round(rawValue / step) * step
    const finalValue = Math.max(min, Math.min(max, steppedValue))
    
    if (finalValue !== value[0]) {
      onValueChange([finalValue])
    }
  }

  return (
    <div 
      ref={containerRef}
      className={cn("relative flex w-full touch-none select-none items-center py-4 cursor-pointer", className)}
    >
      {/* Track Background */}
      <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        {/* Fill */}
        <motion.div 
          className="absolute h-full bg-sky-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Thumb */}
      <motion.div
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onDrag={handleDrag}
        style={{ x: `calc(${percentage}% - 12px)` }}
        className={cn(
          "absolute h-6 w-6 rounded-full border-4 border-white dark:border-slate-900 bg-sky-500 shadow-xl shadow-sky-500/30 transition-shadow",
          isDragging ? "shadow-sky-500/50 scale-110" : "hover:scale-105"
        )}
      />
    </div>
  )
}

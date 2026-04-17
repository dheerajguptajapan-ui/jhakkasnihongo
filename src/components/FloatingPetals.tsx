import React, { useMemo } from 'react';

/**
 * FloatingPetals Component
 * Renders a set of animated sakura petals for v4.0.0 atmosphere.
 * Optimized for performance using CSS transforms and limited node count.
 */
export const FloatingPetals: React.FC = () => {
  // Cap to 15 petals for mobile performance safety
  const petalCount = 15;

  const petals = useMemo(() => {
    return Array.from({ length: petalCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 10 + 10}s`,
      size: `${Math.random() * 5 + 8}px`,
      rotation: `${Math.random() * 360}deg`,
    }));
  }, []);

  return (
    <div className="petal-container">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="sakura-petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            width: petal.size,
            height: `calc(${petal.size} * 0.66)`,
            transform: `rotate(${petal.rotation})`,
          }}
        />
      ))}
    </div>
  );
};

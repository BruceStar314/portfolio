import { useEffect, useRef } from 'react';

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  drift: number;
}

export default function FallingSnow() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  //Set canvas size
  const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Create snowflakes
  const snowflakes: Snowflake[] = [];
  const numSnowflakes = 50;

  for (let i = 0; i < numSnowflakes; i++) {
  snowflakes.push({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.random() * 3 + 2,
  speed: Math.random() * 1 + 0.5,
  opacity: Math.random() * 0.5 + 0.5,
  drift: Math.random() * 0.5 - 0.25,
  });
  }

  // Animation loop
  let animationFrameId: number;

  const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snowflakes.forEach((flake) => {
  // Draw glowing ball 
  const gradient = ctx.createRadialGradient(
  flake.x,
  flake.y,
  0,
  flake.x,
  flake.y,
  flake.radius * 2 
  );
  gradient.addColorStop(0, `rgba(255, 255, 255, ${flake.opacity})`);
  gradient.addColorStop(0.5, `rgba(255, 255, 255, ${flake.opacity * 0.5})`);
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

  ctx.beinPath();
  ctx.arc(flake.x, flake.y, flake.radius * 2, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();

  //Update position
  flake.y += flake.speed;
  flake.x += flake.drift;

  //Reset snowflake when out of bounds
  if (flake.y > canvas.height) {
  flake.y = -10;  flake.x = Math.random() * canvas.width;;
  }
  if (flake.x > canvas.width) {
  flake.x = 0;
  } else if (flake.x < 0) {
  flake.x = canvas.width;
  }
});

animationFrameId = requestAnimationFrame(animate);
};

animate();

return () => {
window.removeEventListener('resize', resizeCanvas);
cancelAnimationFrame(animationFrameId);
};
}, []);

  return (
  <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0" /> }}
    style={{ mixBlendMode: 'screen' }}
    />
  );
}


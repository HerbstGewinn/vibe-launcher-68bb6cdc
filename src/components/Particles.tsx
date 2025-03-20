
import React, { useEffect, useRef } from 'react';

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

const Particles = ({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const canvasSize = useRef({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);

    return () => {
      window.removeEventListener("resize", initCanvas);
    };
  }, []);

  useEffect(() => {
    initCanvas();
  }, [refresh]);

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current = [];
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
    }
  };

  const circleParams = () => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const size = Math.floor(Math.random() * 2) + 0.1;
    const alpha = Number(Math.random().toFixed(1)) / 2;
    
    return {
      x,
      y,
      translateX: 0,
      translateY: 0,
      size,
      alpha,
      targetAlpha: alpha,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      magnetism: 0.1 + Math.random() * 4,
    };
  };

  const drawParticles = () => {
    circles.current = [];
    for (let i = 0; i < quantity; i++) {
      circles.current.push(circleParams());
    }
  };

  const drawCircle = (circle: any, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = circle;
      context.current.beginPath();
      context.current.arc(x + translateX, y + translateY, size, 0, 2 * Math.PI);
      context.current.fillStyle = `rgba(10, 255, 255, ${alpha})`;
      context.current.fill();
      context.current.closePath();

      if (!update) {
        return;
      }

      if (Math.random() < 0.005) {
        circle.targetAlpha = Math.random() / 2;
      }
      
      circle.alpha += (circle.targetAlpha - circle.alpha) * 0.01;
      circle.x += circle.dx;
      circle.y += circle.dy;
      
      if (circle.x > canvasSize.current.w) {
        circle.x = 0;
      }
      if (circle.x < 0) {
        circle.x = canvasSize.current.w;
      }
      if (circle.y > canvasSize.current.h) {
        circle.y = 0;
      }
      if (circle.y < 0) {
        circle.y = canvasSize.current.h;
      }
    }
  };

  const animate = () => {
    if (context.current && canvasRef.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
      
      const ease = staticity / 100;
      
      // Move circle based on mouse position
      for (const circle of circles.current) {
        const dx = (circle.x - mousePosition.current.x) * 0.1;
        const dy = (circle.y - mousePosition.current.y) * 0.1;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const circleMass = circle.size / 2;
        
        if (distance < 120) {
          const force = circleMass / (distance * distance);
          const targetX = dx * force * circle.magnetism * -1;
          const targetY = dy * force * circle.magnetism * -1;
          circle.translateX += (targetX - circle.translateX) * 0.01 * (ease * 1.3);
          circle.translateY += (targetY - circle.translateY) * 0.01 * (ease * 1.3);
        } else {
          circle.translateX += (0 - circle.translateX) * ease;
          circle.translateY += (0 - circle.translateY) * ease;
        }
        
        drawCircle(circle, true);
      }
      
      requestAnimationFrame(animate);
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const mx = (x / w) * 2 - 1;
      const my = (y / h) * 2 - 1;
      mouse.current = { x: mx, y: my };
      mousePosition.current = { x, y };
    }
  };

  return (
    <div
      ref={canvasContainerRef}
      className={`absolute inset-0 ${className}`}
      onMouseMove={handleMouseMove}
    >
      <canvas ref={canvasRef} className="block" />
    </div>
  );
};

export default Particles;

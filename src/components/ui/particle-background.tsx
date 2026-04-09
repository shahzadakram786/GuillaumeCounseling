"use client";

import { useEffect, useRef } from "react";

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Mouse interaction coordinates
    let mouse = { x: -1000, y: -1000 };

    // --- Configuration ---
    const PARTICLE_COUNT = 70; // Adjust for density
    const CONNECTION_DISTANCE = 120;
    const MOUSE_REPEL_RADIUS = 150;
    const PARTICLE_COLOR = "rgba(23, 96, 159, 0.4)"; // Guillaume Blue with opacity
    const LINE_COLOR = "rgba(23, 96, 159, 0.15)";

    const resizeCanvas = () => {
      // Get parent element's dimensions instead of window to stay contained in the section
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseX: number;
      baseY: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.5; // Slow, elegant drift
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update(width: number, height: number) {
        // Subtle drift
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls smoothly
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse Repel Logic (The "Interactive" part)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MOUSE_REPEL_RADIUS) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (MOUSE_REPEL_RADIUS - distance) / MOUSE_REPEL_RADIUS;
          
          // Push particles away from mouse
          this.x -= forceDirectionX * force * 2;
          this.y -= forceDirectionY * force * 2;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = PARTICLE_COLOR;
        ctx.fill();
      }
    }

    const init = () => {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Fade line opacity based on distance
            const opacity = 1 - distance / CONNECTION_DISTANCE;
            ctx.strokeStyle = `rgba(23, 96, 159, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Event Listeners
    window.addEventListener("resize", init);
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Boot up
    init();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", init);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  );
};
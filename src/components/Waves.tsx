import { useRef, useEffect } from "react";

export default function Waves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = Math.max(window.innerWidth, 1200));
    let height = (canvas.height = Math.max(window.innerHeight, 700));

    const waves = 25;
    const speed = 0.004;

    let time = 455000;
    function getSmoothRandomOffsets(t: number) {
        const speed1 = 0.7;
        const speed2 = 1.3;

        const x = Math.sin(t * speed1 * 0.001 + 10.123) * 0.9;
        const y = Math.cos(t * speed2 * 0.001 + 42.789) * 0.9;
        return {x, y};

    }
    function draw() {
      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, "magenta");
        gradient.addColorStop(1, "blue");

        ctx.strokeStyle = gradient;

      ctx.lineWidth = 1;

      for (let j = 0; j < waves; j++) {
        const {x: change1, y: change2} = getSmoothRandomOffsets(time)
        ctx.beginPath();
        const w1 = width * 0.32 + 7 * j + (change1 * 20)
        const h1 = height * 0.5 + 5 * j + (change2 * 30)
        const w2 = width * 0.66 + 3 * j
        const h2 = height * 0.1  - 2 * j + (change1 * 100)

        const w3 = width 
        const h3 = height * 0.3
        const ow0 = (j * 5) + 40
        const oh0 = height + 50 + (10 * j) 
        const ow1 = 300 - (j * 10) + (change2 * 300)
        const oh1 = (j * 10) + 100  + (change1 * 100)
        const ow2 = 200 + (change1 * 100)
        const oh2 = (j * 10)  + (change2 * 300)
        const ow3 = 200 
        const oh3 = (j * 10)  


        ctx.beginPath();
        ctx.moveTo(0 - j + (change2 * 100) - 200, 300 - (j * change2) + (change1 * 200))
        ctx.bezierCurveTo(ow0, oh0, w1 - ow1, h1 - oh1, w1, h1)
        ctx.bezierCurveTo(w1 + ow1, h1 + oh1, w2 - ow2, h2 - oh2, w2, h2)
        ctx.bezierCurveTo(w2 + ow2, h2 + oh2, w3 - ow3, h3 - oh3, w3, h3)
        ctx.stroke();
      }

      time += speed * 1000;
      animationRef.current = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = (canvas.width = Math.max(window.innerWidth, 1200));
      height = (canvas.height = Math.max(window.innerHeight, 700));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ background: "transparent", width: "100vw", minHeight: "700px", position: "absolute", overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
}

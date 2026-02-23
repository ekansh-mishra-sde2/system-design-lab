import { useRef, useState } from "react";

export default function CanvasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleWheel = (e: React.WheelEvent) => {
    setPosition((prev) => ({
      x: prev.x - e.deltaX,
      y: prev.y - e.deltaY,
    }));
  };

  return (
    <div className="canvas-container" onWheel={handleWheel}>
      {/* Transform layer */}
      <div
        className="canvas-transform-layer"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div className="canvas-grid" />
        {children}
      </div>
    </div>
  );
}

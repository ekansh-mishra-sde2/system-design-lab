import { ZoomIn, ZoomOut } from "lucide-react";

export default function BottomControls() {
  return (
    <div className="bottom-controls">
      <ZoomOut size={18} />
      <span>100%</span>
      <ZoomIn size={18} />
    </div>
  );
}

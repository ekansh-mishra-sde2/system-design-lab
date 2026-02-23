import { useState } from "react";
import { X } from "lucide-react";
import techLead from "../assets/tech-lead.png";

interface Props {
  message: string;
}

export default function FloatingTechLead({ message }: Props) {
  const [open, setOpen] = useState(false);

  const togglePanel = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="techlead-wrapper">
      {/* Floating PNG Icon */}
      <div className="techlead-icon" onClick={togglePanel}>
        <img src={techLead} alt="Tech Lead" />
      </div>

      {/* Sliding Panel */}
      <div className={`techlead-panel ${open ? "" : "hidden"}`}>
        <div className="techlead-header">
          <span>Tech Lead</span>
          <X size={18} onClick={togglePanel} className="close-icon" />
        </div>

        <div className="techlead-body">
          <img src={techLead} alt="Tech Lead Large" />
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

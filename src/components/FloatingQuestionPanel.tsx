import { useState } from "react";
import { HelpCircle, X } from "lucide-react";

interface Props {
  question: string;
}

export default function FloatingQuestionPanel({ question }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="question-wrapper">
      {/* Floating Button */}
      <div
        className={`question-icon ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <HelpCircle size={22} />
      </div>

      {/* Pop Panel */}
      <div className={`question-panel ${open ? "" : "hidden"}`}>
        <div className="question-header">
          <span>Guiding Question</span>
          <X size={18} onClick={() => setOpen(false)} />
        </div>

        <div className="question-content">{question}</div>
      </div>
    </div>
  );
}

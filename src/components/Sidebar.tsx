import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`sidebar ${open ? "open" : ""}`}>
        <h2 className="logo">System Design Lab</h2>

        <Link to="/">Chapter 0</Link>
        <Link to="/chapter-1">Chapter 1</Link>
      </div>
    </>
  );
}

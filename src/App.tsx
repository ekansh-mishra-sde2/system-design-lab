import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import CanvasLayout from "./components/CanvasLayout";
import BottomControls from "./components/BottomControls";

import Chapter0 from "./pages/Chapter0";
import Chapter1 from "./pages/Chapter1";
import FloatingQuestionPanel from "./components/FloatingQuestionPanel";
import FloatingTechLead from "./components/FloatingTechLead";

function App() {
  return (
    <div className="app-shell">
      <Sidebar />

      <div className="canvas-area">
        <Toolbar enabled={false} />

        <CanvasLayout>
          <Routes>
            <Route path="/" element={<Chapter0 />} />
            <Route path="/chapter-1" element={<Chapter1 />} />
          </Routes>
        </CanvasLayout>

        {/* Floating UI — OUTSIDE canvas transform */}
        <FloatingQuestionPanel question="Why system design?" />
        <FloatingTechLead message="System design helps us scale." />

        <BottomControls />
      </div>
    </div>
  );
}
export default App;

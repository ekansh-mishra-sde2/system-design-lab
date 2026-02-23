# 🚀 System Design Lab

An interactive, visual system design learning platform built with **React + TypeScript**.

System Design Lab allows users to learn architecture concepts visually by building, experimenting, and simulating real-world system components like Clients, Servers, Databases, CDNs, Redis, and Load Balancers on an infinite canvas.

---

## 🌌 Vision

Most system design resources are static diagrams.

This project aims to make system design:

- 🎯 Interactive
- 🧠 Concept-driven
- 🔄 Scenario-based
- 🧪 Experiment-friendly

Users progress through chapters where each chapter introduces a new architecture concept (Monolith → Serverless → Scaling → Caching → Load Balancing → etc.).

---

## ✨ Current Features (MVP – Phase 1)

- 🧭 Sidebar-based chapter navigation
- 🖤 Infinite dark canvas with grid
- 🧰 Top-centered dynamic toolbar
- 💬 Floating “Guiding Question” panel
- 🧔 Floating “Tech Lead” assistant
- 🔍 Bottom zoom controls
- 🖱 Canvas panning support
- 🎨 Clean whiteboard-style layout architecture

---

## 🏗 Architecture Overview

The UI follows a professional whiteboard tool structure:

```
App Shell (Grid Layout)
├── Sidebar
└── Canvas Area (position: relative)
    ├── Toolbar (overlay)
    ├── CanvasLayout (transform engine)
    │     ├── Grid Layer
    │     └── Chapter Content
    ├── Floating Question Panel
    ├── Floating Tech Lead Panel
    └── Bottom Controls
```

### Key Design Decisions

- 🔄 Transform layer separated from overlay UI
- 🧱 Absolute positioning only within canvas-area
- ⚙ Clean separation between engine (CanvasLayout) and UI chrome
- 📦 Component-driven modular structure

---

## 🛠 Tech Stack

- ⚛ React
- 🟦 TypeScript
- 🧭 React Router DOM
- 🎨 Custom CSS (whiteboard-style layout)
- 🎯 Lucide Icons

Planned future integrations:

- React Flow (node-based diagram engine)
- Simulation engine for request flow
- Algorithm switching (cache strategies, load balancing, etc.)
- Chapter-based progressive unlocking

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.tsx
│   ├── Toolbar.tsx
│   ├── CanvasLayout.tsx
│   ├── FloatingQuestionPanel.tsx
│   ├── FloatingTechLead.tsx
│   └── BottomControls.tsx
│
├── pages/
│   ├── Chapter0.tsx
│   └── Chapter1.tsx
│
├── assets/
│   └── tech-lead.png
│
├── styles/
│   ├── layout.css
│   ├── canvas.css
│   ├── toolbar.css
│   ├── techlead.css
│   └── question.css
│
└── App.tsx
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/system-design-lab.git
cd system-design-lab
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 📚 Chapters Concept

Each chapter introduces a new system design concept:

| Chapter   | Concept                                   |
| --------- | ----------------------------------------- |
| Chapter 0 | Introduction to System Design             |
| Chapter 1 | Monolith vs Serverless                    |
| Future    | Scaling, Caching, CDN, Multi-region, etc. |

Chapters will eventually:

- Enable specific tools
- Introduce constraints
- Simulate traffic
- Show system behavior under load

---

## 🎯 Roadmap

### Phase 1 (Current)

- Layout shell
- Canvas engine
- Floating assistants
- Toolbar

### Phase 2

- Drag & drop system components
- Node connection support
- Real zoom (scale)
- Snap-to-grid

### Phase 3

- Traffic simulation engine
- Algorithm switching (LRU, Round Robin, etc.)
- Request animation
- Metrics visualization

### Phase 4

- Save/load diagrams
- Multi-user collaboration
- Public sharing
- System design interview mode

---

## 💡 Why This Project?

System design is usually:

- Static
- Overwhelming
- Hard to visualize dynamically

This lab aims to:

- Turn system design into a sandbox
- Let learners experiment
- Make scaling concepts intuitive

---

## 🤝 Contributing

Contributions are welcome!

If you'd like to:

- Improve UI/UX
- Add simulation features
- Add new chapters
- Improve performance

Open an issue or submit a PR.

---

## 📜 License

MIT License.

---

## 👨‍💻 Author

Built with passion to make system design visual, interactive, and practical.

---

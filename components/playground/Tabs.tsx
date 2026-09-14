"use client";
import { useState, KeyboardEvent } from "react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

export function CustomTabs({ tabs }: { tabs: Tab[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    } else if (e.key === "ArrowLeft") {
      setActiveIndex((prev) => (prev - 1 + tabs.length) % tabs.length);
    }
  };

  return (
    <div>
      <div role="tablist" onKeyDown={handleKeyDown} className="flex border-b">
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeIndex === idx}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            tabIndex={activeIndex === idx ? 0 : -1}
            onClick={() => setActiveIndex(idx)}
            className={`p-3 ${activeIndex === idx ? "border-b-2 border-blue-600 font-bold" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, idx) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={activeIndex !== idx}
          className="p-4"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
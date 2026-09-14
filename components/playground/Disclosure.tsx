"use client";
import { useState } from "react";

export function CustomDisclosure({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded m-2">
      <button
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-3 font-semibold bg-gray-100 flex justify-between"
      >
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <div className="p-3 border-t">{children}</div>}
    </div>
  );
}
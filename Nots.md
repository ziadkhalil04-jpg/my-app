# FE-05 Assignment Notes: Custom Components vs shadcn/ui

## Overview
This document outlines the accessibility gaps and architectural differences identified when comparing custom hand-built React + TypeScript components against `shadcn/ui` (built on top of Radix UI primitives).

---

## Identified Accessibility Gaps (What shadcn/ui Handled Better)

### 1. Robust Focus Trapping & Scroll Locking (Modal Dialog)
* **Custom Implementation:** Handled basic keyboard shortcuts (`Escape` key) and ref focus restoring upon closing using React standard hooks (`useEffect`, `useRef`). However, it missed locking the `tab` key focus strictly within the active modal container (Focus Trap), allowing keyboard users to inadvertently tab out into background elements.
* **shadcn/ui (Radix Dialog):** Uses `@radix-ui/react-dialog` which automatically enforces a strict focus trap loop, prevents pointer/keyboard interactions with background elements (`aria-hidden`), and locks body scrolling (`overflow: hidden`) to prevent background layout scroll drift.

### 2. Full ARIA Keyboard Navigation & Roving Tabindex (Tabs Pattern)
* **Custom Implementation:** Implemented basic left/arrow key navigation to switch active tabs. However, it lacked full keyboard focus delegation and automatic ARIA relationship attributes for dynamic tablists.
* **shadcn/ui (Radix Tabs):** Implements the full W3C ARIA pattern using a Roving `tabindex` strategy (`tabIndex={0}` for active tab, `-1` for inactive tabs). It also properly correlates `aria-controls` with `aria-labelledby` across panel elements, supporting both automatic and manual keyboard activation modes effortlessly.

---

## TypeScript & Code Structure
* **Props Typing:** Both implementations enforce strict TypeScript interfaces without using `any`.
* **Headless Architecture:** `shadcn/ui` decouples state logic and ARIA semantics entirely into unstyled primitives (Radix), applying Tailwind styling via a component wrapper layer, making it far more maintainable and flexible than monolithic custom components.
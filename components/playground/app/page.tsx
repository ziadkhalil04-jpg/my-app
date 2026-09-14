"use client";

import { useState } from "react";
import { CustomModal } from "@/components/playground/Model";
import { CustomTabs } from "@/components/playground/Tabs";
import { CustomDisclosure } from "@/components/playground/Disclosure";

export default function PlaygroundPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabData = [
    {
      id: "tab1",
      label: "Tab 1",
      content: <p className="text-gray-700">محتوى التبويب الأول</p>,
    },
    {
      id: "tab2",
      label: "Tab 2",
      content: <p className="text-gray-700">محتوى التبويب الثاني</p>,
    },
  ];

  return (
    <main className="max-w-4xl mx-auto p-8 space-y-10">
      <h1 className="text-3xl font-bold border-b pb-4">FE-05 Playground</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. Modal Dialog</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Open Modal
        </button>
        <CustomModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Accessible Modal"
        >
          <p>محتوى النافذة المنبثقة</p>
        </CustomModal>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Tabs</h2>
        <CustomTabs tabs={tabData} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. Disclosure</h2>
        <CustomDisclosure title="عرض التفاصيل">
          <p>محتوى Disclosure</p>
        </CustomDisclosure>
      </section>
    </main>
  );
}
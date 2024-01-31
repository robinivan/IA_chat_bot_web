"use client";

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import ModalChatbot from "@/components/ui/ModalChatbot";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
      <Features />

      <Testimonials />
      <Newsletter />
      <ModalChatbot isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

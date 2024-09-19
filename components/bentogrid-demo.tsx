import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconClipboardCopy,
} from "@tabler/icons-react";
import Image from "next/image"; // Import Image component

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto mt-6">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Let's Explore!",
    description:
      "Learn and reflect on the topic of Ecology & Sustainability through our quick quiz app.",
    header: (
      <div className="relative w-full h-48">
        <Image
          src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop"
          alt="Innovation Image"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Garbage Separation.",
    description: "Discover the importance of waste management techniques.",
    header: (
      <div className="relative w-full h-48">
        <Image
          src="https://images.unsplash.com/photo-1517430816045-df4b7de211e0?q=80&w=3556&auto=format&fit=crop"
          alt="Digital Revolution Image"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Sustainability.",
    description: "Explore the impact of sustainable practices.",
    header: (
      <div className="relative w-full h-48">
        <Image
          src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=3556&auto=format&fit=crop"
          alt="Art of Design Image"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "15 random Questions to complete.",
    description:
      "Put your knowledge to the test with 15 random multiple choice questions.",
    header: (
      <div className="relative w-full h-48">
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=3556&auto=format&fit=crop"
          alt="Communication Image"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge.",
    description:
      "Join the quest for understanding more about Ecology & Sustainability.",
    header: (
      <div className="relative w-full h-48">
        <Image
          src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=3556&auto=format&fit=crop"
          alt="Knowledge Image"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];

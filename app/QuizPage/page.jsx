"use client";
import React from "react";
import { BentoGridDemo } from "@/components/bentogrid-demo";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="">
      <BentoGridDemo />
      <div className="flex justify-center items-center mt-12">
        <Button
          className="px-8"
          onClick={() => {
            router.push("/Quiz");
          }}
        >
          Start Quiz !
        </Button>
      </div>
      <div className="mt-12"></div>
    </div>
  );
};

export default page;

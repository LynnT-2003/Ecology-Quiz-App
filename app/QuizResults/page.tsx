"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button"; // Assuming you have a button component from ShadCN

const QuizResults = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const score = searchParams.get("score");
  const total = searchParams.get("total");

  const handleRestartQuiz = () => {
    router.push("/QuizPage");
  };

  const handleGoHome = () => {
    router.push("/");
  };

  const showTeamAlert = () => {
    alert(
      "Team Members:\n\n" +
        "1.  Lynn Thit Nyi Nyi\n" +
        "2.  Nathamon Sittirak\n" +
        "3.  Bindiya Sakunlicha\n" +
        "4.  Praewphan Phankumkai\n" +
        "5.  Ida Kanokjan Dahlen\n" +
        "6.  Phinyapat Boonprom\n" +
        "7.  Attanapong Permpool\n" +
        "8.  Narapon Sucher"
    );
  };

  return (
    <div className="flex flex-col items-center h-screen items-center justify-center">
      {/* Quiz Results */}
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Congratulations!</h1>
        <p className="text-lg mb-6">
          You got {score} out of {total} right. Well done!
        </p>

        <div className="flex gap-4 mb-6">
          <Button
            onClick={handleRestartQuiz}
            className="bg-blue-500 text-white"
          >
            Start Quiz Again
          </Button>
          <Button onClick={handleGoHome} className="bg-gray-500 text-white">
            Go Home
          </Button>
        </div>
      </div>

      {/* Footer Section with Credits */}
      <footer className="text-xs text-center text-gray-500 mt-12">
        <p className="mb-2">
          Created with ❤️ by
          <span
            className="cursor-pointer text-blue-500 underline"
            onClick={showTeamAlert}
          >
            {" "}
            our Awesome Team.
          </span>
        </p>
        <p className="mt-0 text-2xs">
          &copy; {new Date().getFullYear()} Ecology Quiz App. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default QuizResults;

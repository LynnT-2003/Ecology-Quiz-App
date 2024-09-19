"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import router
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
};

const questions: Question[] = [
  {
    question:
      "Which of the following items should be placed in a recycling bin?",
    options: ["Plastic bottles", "Food waste", "Ceramics", "Used tissues"],
    correctAnswer: 0,
  },
  {
    question:
      "What is the term for materials that can break down naturally and safely into the environment?",
    options: ["Recyclable", "Biodegradable", "Non-renewable", "Compostable"],
    correctAnswer: 1,
  },
  {
    question: "Which type of waste is most suitable for composting?",
    options: ["Glass", "Plastic", "Food scraps", "Electronics"],
    correctAnswer: 2,
  },
  {
    question:
      "What is the primary goal of the 'reduce' aspect in the 3Rs (Reduce, Reuse, Recycle)?",
    options: [
      "Minimizing waste generation",
      "Reusing existing products",
      "Processing materials into new products",
      "Sorting waste for recycling",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What type of plastic is generally considered the easiest to recycle?",
    options: [
      "Polyethylene Terephthalate (PET)",
      "Polyvinyl Chloride (PVC)",
      "Polystyrene (PS)",
      "Polypropylene (PP)",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which of the following is a greenhouse gas primarily responsible for global warming?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    correctAnswer: 1,
  },
  {
    question:
      "Which symbol on plastic packaging indicates that the material is recyclable?",
    options: [
      "A triangle with a number inside",
      "A leaf icon",
      "A circle with arrows",
      "A trash bin",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which of the following materials takes the longest to decompose in a landfill?",
    options: ["Glass bottle", "Newspaper", "Apple core", "Cotton shirt"],
    correctAnswer: 0,
  },
  {
    question:
      "What is the primary environmental concern associated with single-use plastic products?",
    options: [
      "They take hundreds of years to decompose",
      "They are made from renewable resources",
      "They are expensive to produce",
      "They release oxygen into the atmosphere",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "In terms of waste management hierarchy, which action is the most preferred?",
    options: ["Disposal", "Recycling", "Reducing", "Incineration"],
    correctAnswer: 2,
  },
  {
    question:
      "What is the process of converting organic waste into a nutrient-rich material called?",
    options: ["Incineration", "Composting", "Recycling", "Landfilling"],
    correctAnswer: 1,
  },
  {
    question:
      "Which category of waste includes batteries, fluorescent bulbs, and paint?",
    options: [
      "Recyclable waste",
      "Hazardous waste",
      "Organic waste",
      "Construction waste",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which of the following practices is most effective in conserving water at home?",
    options: [
      "Washing cars frequently",
      "Fixing leaky faucets",
      "Using plastic bottles",
      "Flushing tissues down the toilet",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the main benefit of planting trees in urban areas?",
    options: [
      "Increasing soil acidity",
      "Reducing noise pollution",
      "Improving internet connectivity",
      "Enhancing biodiversity",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Which of the following methods can reduce energy consumption in households?",
    options: [
      "Using incandescent light bulbs",
      "Unplugging electronics when not in use",
      "Running half-empty dishwashers",
      "Turning up the thermostat during summer",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "What is the primary function of a material recovery facility (MRF)?",
    options: [
      "Incinerating waste for energy production",
      "Sorting and processing recyclable materials",
      "Composting organic waste",
      "Landfilling non-recyclable items",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which renewable energy source is derived from the sun?",
    options: ["Wind energy", "Hydropower", "Solar energy", "Geothermal energy"],
    correctAnswer: 2,
  },
  {
    question:
      "Which of the following types of waste is generally non-biodegradable?",
    options: ["Plastic bags", "Banana peels", "Paper", "Wood"],
    correctAnswer: 0,
  },
  {
    question:
      "What is the most effective method to reduce the amount of plastic entering oceans?",
    options: [
      "Burning all plastic waste",
      "Improving waste management ",
      "Avoiding the use of paper",
      "Using single-use products",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which international agreement is aimed at combating climate change?",
    options: [
      "Kyoto Protocol",
      "Paris Agreement",
      "Montreal Protocol",
      "Basel Convention",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which of the following practices can help in reducing carbon footprint?",
    options: [
      "Using fossil fuel-based products",
      "Driving more frequently",
      "Using energy-efficient appliances",
      "Burning more coal for energy",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the primary goal of waste segregation at the source?",
    options: [
      "Increase landfill size",
      "Reduce the amount of recyclable waste",
      "Ensure efficient waste processing and recycling",
      "Mix hazardous waste with organic waste",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which of the following is NOT a benefit of recycling?",
    options: [
      "Reduces landfill waste",
      "Saves natural resources",
      "Contributes to air pollution",
      "Conserves energy",
    ],
    correctAnswer: 2,
  },
  {
    question: "What does 'carbon neutrality' mean?",
    options: [
      "Producing as much carbon as possible",
      "Offsetting carbon emissions with an equivalent amount of carbon reductions",
      "Eliminating all carbon dioxide in the atmosphere",
      "Avoiding the use of renewable energy",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which type of waste should be treated separately due to its hazardous nature?",
    options: ["Electronic waste", "Organic waste", "Paper waste", "Wood waste"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary environmental concern with deforestation?",
    options: [
      "Decreased paper production",
      "Loss of biodiversity and carbon sequestration",
      "Increased wood availability",
      "Improved water quality",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which practice can improve air quality in cities?",
    options: [
      "Increasing industrial emissions",
      "Switching to renewable energy sources",
      "Using more coal for power",
      "Increasing the number of vehicles on the road",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which of the following is a natural way to reduce the effects of urban heat islands?",
    options: [
      "Planting more trees",
      "Installing more asphalt roads",
      "Building higher skyscrapers",
      "Increasing car usage",
    ],
    correctAnswer: 0,
  },
];

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const router = useRouter(); // Initialize router

  // Shuffle questions and limit to 10
  useEffect(() => {
    const shuffled = [...questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index);

    if (index === shuffledQuestions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        // At the end of the quiz, route to QuizResults and pass the score
        router.push(
          `/QuizResults?score=${score + 1}&total=${shuffledQuestions.length}`
        );
      }
      setSelectedAnswer(null);
    }, 1000);
  };

  if (shuffledQuestions.length === 0) {
    return <div>Loading...</div>; // Handle case where questions are not loaded yet
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.div
        key={currentQuestionIndex}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="md:w-96 w-[90vw] mb-4 p-4"
      >
        <Card>
          <CardHeader>
            <CardTitle>{`Question ${currentQuestionIndex + 1}`}</CardTitle>
            <CardDescription>{currentQuestion.question}</CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      <motion.div
        key={currentQuestionIndex + "-options"}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 gap-4 md:w-96 w-[90vw] mx-auto"
      >
        {currentQuestion.options.map((option, index) => (
          <Card
            key={index}
            onClick={() => handleAnswerClick(index)}
            className={`flex items-center justify-center p-4 w-full h-full cursor-pointer text-center ${
              selectedAnswer !== null
                ? index === currentQuestion.correctAnswer
                  ? "bg-green-500"
                  : selectedAnswer === index
                  ? "bg-red-500"
                  : "bg-gray-200"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            <CardContent className="flex items-center justify-center">
              {option}
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Display the score */}
      <div className="mt-6 text-lg font-bold">
        Score: {score}/{shuffledQuestions.length}
      </div>
    </div>
  );
};
export default QuizPage;

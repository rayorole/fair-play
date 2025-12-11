"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define shapes for our data
type FeedbackType = "success" | "warning" | "error" | "neutral";

interface Choice {
  id: string;
  text: string;
  feedback: string;
  type: FeedbackType;
  score: number;
}

interface Scenario {
  id: number;
  player: string;
  team: string;
  situation: string;
  choices: Choice[];
  imageColor: string; // Fallback for image
}

const scenarios: Scenario[] = [
  {
    id: 1,
    player: "Kevin De Bruyne",
    team: "Manchester City",
    situation:
      "It’s the 82nd minute, 1–1 vs. Arsenal. You’re 25 yards out, center of the pitch, with Haaland making a diagonal run and Foden arriving at the edge of the box.",
    imageColor: "bg-sky-200",
    choices: [
      {
        id: "A",
        text: "Thread a through ball to Haaland.",
        feedback: "Perfectly timed! Haaland finishes with power — 2–1 City.",
        type: "success",
        score: 10,
      },
      {
        id: "B",
        text: "Take a shot from distance.",
        feedback: "Decent strike but over the bar — fans applaud the intent.",
        type: "neutral",
        score: 5,
      },
      {
        id: "C",
        text: "Lay it off to Foden.",
        feedback: "Foden’s first touch is heavy, Arsenal recover. You look frustrated.",
        type: "warning",
        score: 0,
      },
    ],
  },
  {
    id: 2,
    player: "Virgil van Dijk",
    team: "Liverpool",
    situation:
      "Chelsea counter quickly. Nicolas Jackson is sprinting toward goal, 1v1 with you just inside the halfway line.",
    imageColor: "bg-red-700",
    choices: [
      {
        id: "A",
        text: "Step up early to intercept.",
        feedback: "⚠️ You mistime it slightly — Jackson skips past, but Alisson saves the day.",
        type: "warning",
        score: 2,
      },
      {
        id: "B",
        text: "Delay and shepherd him wide.",
        feedback: "🧊 Perfect positioning — you slow the attack and teammates recover.",
        type: "success",
        score: 10,
      },
      {
        id: "C",
        text: "Commit to a sliding tackle.",
        feedback: "❌ Mistimed! Yellow card and dangerous free kick conceded",
        type: "error",
        score: -5,
      },
    ],
  },
  {
    id: 3,
    player: "Vinícius Jr.",
    team: "Real Madrid",
    situation:
      "85th minute, you’re on the left wing, tied 2–2 vs. Atlético. You beat one defender; now it’s 2v2 with Rodrygo in support.",
    imageColor: "bg-white border border-gray-200",
    choices: [
      {
        id: "A",
        text: "Cut inside and shoot.",
        feedback: "🔥 Curled beautifully into the top corner! Bernabéu erupts!",
        type: "success",
        score: 10,
      },
      {
        id: "B",
        text: "Square it to Rodrygo.",
        feedback: "💨 Rodrygo’s shot is blocked — good idea, unlucky.",
        type: "neutral",
        score: 5,
      },
      {
        id: "C",
        text: "Dribble to the byline and cross.",
        feedback: "💫 Perfect cross, but Benzema’s header goes just wide.",
        type: "neutral",
        score: 7,
      },
    ],
  },
  {
    id: 4,
    player: "Erling Haaland",
    team: "Manchester City",
    situation:
      "You've beaten the offside trap and are charging 1v1 against the keeper. The defender is breathing down your neck.",
    imageColor: "bg-sky-300",
    choices: [
      {
        id: "A",
        text: "Attempt a delicate chip over the keeper.",
        feedback: "Keeper reads it and catches easily. Guardiola screams from the touchline.",
        type: "warning",
        score: 0,
      },
      {
        id: "B",
        text: "Smash it low and hard into the corner.",
        feedback: "Goal! Classic Haaland finish. The net nearly breaks.",
        type: "success",
        score: 10,
      },
      {
        id: "C",
        text: "Try to round the goalkeeper.",
        feedback: "The keeper dives at your feet and claims the ball. Too risky.",
        type: "neutral",
        score: 3,
      },
    ],
  },
  {
    id: 5,
    player: "Jude Bellingham",
    team: "Real Madrid",
    situation:
      "Ball spills loose at the edge of the box in the 90th minute. You're arriving late with momentum.",
    imageColor: "bg-white border-2 border-yellow-400",
    choices: [
      {
        id: "A",
        text: "Hit it first time on the volley.",
        feedback: "Screamer! Top bins! The stadium goes absolute wild.",
        type: "success",
        score: 10,
      },
      {
        id: "B",
        text: "Take a touch to control.",
        feedback: "Defender closes you down instantly. Chance gone.",
        type: "error",
        score: -2,
      },
      {
        id: "C",
        text: "Look for a pass.",
        feedback: "You find a teammate, but the angle is tight. They win a corner.",
        type: "neutral",
        score: 5,
      },
    ],
  },
  {
    id: 6,
    player: "Bukayo Saka",
    team: "Arsenal",
    situation:
      "You receive the ball wide on the right. Two defenders are doubling up on you.",
    imageColor: "bg-red-300",
    choices: [
      {
        id: "A",
        text: "Cut inside to your left foot.",
        feedback: "You beat both defenders and curl it in! Starboy magic.",
        type: "success",
        score: 10,
      },
      {
        id: "B",
        text: "Go down the line for a cross.",
        feedback: "Blocked for a throw-in. Defenders expected that.",
        type: "neutral",
        score: 4,
      },
      {
        id: "C",
        text: "Backpass to White.",
        feedback: "Safe play, keeps possession but kills the momentum.",
        type: "warning",
        score: 2,
      },
    ],
  },
  {
    id: 7,
    player: "Kylian Mbappé",
    team: "France",
    situation:
      "Counter-attack! You have 50 yards of open space and one defender between you and the goal.",
    imageColor: "bg-blue-400",
    choices: [
      {
        id: "A",
        text: "Use raw pace to knock it past him.",
        feedback: "He can't catch you! Easy 1v1 finish.",
        type: "success",
        score: 10,
      },
      {
        id: "B",
        text: "Try a stepover skill move.",
        feedback: "Defender doesn't buy it and tackles. Waste of a counter.",
        type: "error",
        score: -5,
      },
      {
        id: "C",
        text: "Stop and wait for support.",
        feedback: "Defense recovers. The chance for a quick goal is gone.",
        type: "warning",
        score: 0,
      },
    ],
  },
  {
    id: 8,
    player: "Manuel Neuer",
    team: "Bayern Munich",
    situation:
      "Through ball beats your high line. Striker is rushing towards it outside your box.",
    imageColor: "bg-green-400",
    choices: [
      {
        id: "A",
        text: "Stay on your line.",
        feedback: "Striker has too much time and slots it past you.",
        type: "error",
        score: -5,
      },
      {
        id: "B",
        text: "Rush out and slide tackle.",
        feedback: "Risky but you clear it! Sweeper keeper perfection.",
        type: "success",
        score: 10,
      },
      {
        id: "C",
        text: "Rush out and head the ball.",
        feedback: "You clear it but leave the goal open. Heart in mouth moment.",
        type: "neutral",
        score: 5,
      },
    ],
  },
];

export default function QuizPage() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastFeedback, setLastFeedback] = useState<{
    message: string;
    type: FeedbackType;
    scoreEarned: number;
  } | null>(null);
  const [gameFinished, setGameFinished] = useState(false);

  const currentScenario = scenarios[currentScenarioIndex];

  const handleChoice = (choice: Choice) => {
    setScore((prev) => prev + choice.score);
    setLastFeedback({
      message: choice.feedback,
      type: choice.type,
      scoreEarned: choice.score,
    });
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex((prev) => prev + 1);
    } else {
      setGameFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentScenarioIndex(0);
    setScore(0);
    setShowFeedback(false);
    setLastFeedback(null);
    setGameFinished(false);
  };

  const getFeedbackColor = (type: FeedbackType) => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-800 border-green-200";
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "error":
        return "bg-red-100 text-red-800 border-red-200";
      case "neutral":
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto mt-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Decision Game
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 font-medium">Score:</span>
            <span className="text-2xl font-bold text-gray-900">{score}</span>
          </div>
        </div>

        {!gameFinished ? (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-600 h-2.5 rounded-full transition-all duration-500"
                style={{
                  width: `${((currentScenarioIndex + 1) / scenarios.length) * 100}%`,
                }}
              ></div>
            </div>

            {/* Scenario Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300">
              {/* Player Header */}
              <div className={`h-32 ${currentScenario.imageColor} relative flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 drop-shadow-sm">
                    {currentScenario.player}
                  </h2>
                  <p className="text-gray-700 font-medium mt-1">
                    {currentScenario.team}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Situation
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {currentScenario.situation}
                  </p>
                </div>

                {!showFeedback ? (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      What do you do?
                    </h3>
                    <div className="grid gap-4">
                      {currentScenario.choices.map((choice) => (
                        <button
                          key={choice.id}
                          onClick={() => handleChoice(choice)}
                          className="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-green-500 hover:bg-green-50 transition-all duration-200 group relative overflow-hidden"
                        >
                          <div className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 font-bold group-hover:bg-green-500 group-hover:text-white transition-colors">
                              {choice.id}
                            </span>
                            <span className="text-gray-700 font-medium text-lg">
                              {choice.text}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="animate-fadeIn">
                    <div
                      className={`p-6 rounded-xl border ${
                        lastFeedback ? getFeedbackColor(lastFeedback.type) : ""
                      } mb-6`}
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">
                          {lastFeedback?.type === "success" && "🎯"}
                          {lastFeedback?.type === "warning" && "⚠️"}
                          {lastFeedback?.type === "error" && "❌"}
                          {lastFeedback?.type === "neutral" && "⚖️"}
                        </span>
                        <div>
                          <p className="text-lg font-bold mb-1">
                            {lastFeedback?.type === "success" && "Great Choice!"}
                            {lastFeedback?.type === "warning" && "Careful..."}
                            {lastFeedback?.type === "error" && "Oh no!"}
                            {lastFeedback?.type === "neutral" && "Not bad"}
                          </p>
                          <p className="text-lg opacity-90 mb-2">
                            {lastFeedback?.message}
                          </p>
                          <p className="font-mono text-sm font-bold bg-white/20 inline-block px-2 py-1 rounded">
                            {lastFeedback?.scoreEarned && lastFeedback.scoreEarned > 0 ? "+" : ""}
                            {lastFeedback?.scoreEarned} points
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleNext}
                      className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      {currentScenarioIndex < scenarios.length - 1
                        ? "Next Scenario"
                        : "Finish Game"}
                      <span>→</span>
                    </button>
                    {/* Placeholder for visual feedback/animation (e.g. confetti could go here) */}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Game Over Screen */
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden text-center p-12 animate-fadeIn">
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🏆</span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
              Match Finished!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Here is your final performance review
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 mb-8 max-w-sm mx-auto">
              <p className="text-gray-500 font-medium mb-2 uppercase tracking-wide">
                Final Score
              </p>
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                {score}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 italic">
                {score >= 25
                  ? "World Class! You read the game like a pro."
                  : score >= 10
                  ? "Solid performance. A reliable starter for any team."
                  : "Needs improvement. Back to the training ground!"}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button
                  onClick={handleRestart}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                >
                  Play Again
                </button>
                <Link
                  href="/"
                  className="px-8 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-300 transition-all"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

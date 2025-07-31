"use client";
import React from "react";
import Link from "next/link";
import { Movie } from "@/lib/types";
import NebulaEffect from "./nebula-effect";

interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const formatOpeningCrawl = (text: string) => {
    return text
      .replace(/\r\n/g, "\n")
      .split("\n\n")
      .map((paragraph: string, index: number) => (
        <p key={index} className="mb-4 text-gray-300 leading-relaxed">
          {paragraph.trim()}
        </p>
      ));
  };
  const details = [
    {
      label: "CHARACTERS",
      count: movie.characters.length,
      color: "text-yellow-400",
    },
    {
      label: "PLANETS",
      count: movie.planets.length,
      color: "text-green-400",
    },
    {
      label: "STARSHIPS",
      count: movie.starships.length,
      color: "text-blue-400",
    },
    {
      label: "VEHICLES",
      count: movie.vehicles.length,
      color: "text-purple-400",
    },
    {
      label: "SPECIES",
      count: movie.species.length,
      color: "text-pink-400",
    },
  ];
  return (
    <div className="min-h-screen  relative overflow-hidden">
      {/* Nebula effects */}
      <NebulaEffect />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto p-6">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-cyan-400 hover:text-yellow-400 transition-all duration-300 text-lg font-semibold group"
          >
            <span className="mr-2 text-2xl group-hover:transform group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            <span className="border-b border-transparent group-hover:border-yellow-400 transition-all">
              BACK TO GALAXY
            </span>
          </Link>
        </div>

        {/* Main Content Container */}
        <div className="bg-gray-900/60 backdrop-blur-sm border border-cyan-400/30 rounded-lg shadow-2xl shadow-cyan-400/20 overflow-hidden">
          {/* Header Section */}
          <div className="relative p-8 bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-b border-cyan-400/30">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-600 bg-clip-text text-transparent drop-shadow-2xl">
                  {movie.title}
                </h1>
                <div className="text-right">
                  <div className="text-cyan-300 text-sm tracking-widest font-light">
                    EPISODE
                  </div>
                  <div className="text-yellow-400 text-4xl font-bold font-mono">
                    {movie.episode_id}
                  </div>
                </div>
              </div>

              {/* Lightsaber divider */}
              <div className="relative w-full h-1 mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300 to-transparent rounded-full blur-sm"></div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Movie Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Left Column - Basic Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-cyan-300 mb-4 tracking-wide">
                  FILM DETAILS
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-cyan-400/50 transition-colors">
                    <span className="text-cyan-300 font-semibold w-24">
                      DIRECTOR:
                    </span>
                    <span className="text-gray-300 font-mono">
                      {movie.director}
                    </span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-cyan-400/50 transition-colors">
                    <span className="text-cyan-300 font-semibold w-24">
                      PRODUCER:
                    </span>
                    <span className="text-gray-300 font-mono">
                      {movie.producer}
                    </span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-cyan-400/50 transition-colors">
                    <span className="text-cyan-300 font-semibold w-24">
                      RELEASED:
                    </span>
                    <span className="text-gray-300 font-mono">
                      {new Date(movie.release_date).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-cyan-300 mb-4 tracking-wide">
                  GALAXY STATISTICS
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {details.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div
                        className={`text-3xl font-bold font-mono ${stat.color} mb-1`}
                      >
                        {stat.count}
                      </div>
                      <div className="text-cyan-300 text-sm tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Opening Crawl Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 via-transparent to-purple-400/5 rounded-lg"></div>
              <div className="relative p-6 bg-gray-800/30 rounded-lg border border-cyan-400/20">
                <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center tracking-wide">
                  OPENING CRAWL
                </h2>
                <div className="text-gray-300 text-sm md:text-lg leading-relaxed font-light tracking-wide max-w-4xl mx-auto">
                  {formatOpeningCrawl(movie.opening_crawl)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center mt-8 text-gray-400 text-sm tracking-wider">
          {"'"}A LONG TIME AGO IN A GALAXY FAR, FAR AWAY....{"'"}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

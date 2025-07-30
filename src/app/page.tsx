"use client";
import React, { useEffect, useState } from "react";

import MovieTable from "@/components/movie-table";
import LoadingSpinner from "@/components/loading-spinner";
import ErrorMessage from "@/components/error-message";
import { fetchMovies } from "@/lib/api";
import { Movie } from "@/lib/types";
import Image from "next/image";
import NebulaEffect from "@/components/nebula-effect";

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load movies. Please try again later.");
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated starfield background */}

      <NebulaEffect />

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Title with cinematic effect */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent blur-xl"></div>
          <div className="relative h-[100px] w-full mb-10">
            <Image
              src="/logo.svg"
              alt="logo"
              fill
              className="object-contain w-full h-full"
            />
          </div>

          {/* Lightsaber divider */}
          <div className="relative w-full max-w-md mx-auto h-1 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300 to-transparent rounded-full blur-sm"></div>
          </div>
        </div>

        {/* Movie table with enhanced styling */}
        <div className="max-w-6xl mx-auto">
          <MovieTable movies={movies} />
        </div>

        {/* Footer text */}
        <div className="text-center mt-12 text-gray-400 text-sm tracking-wider">
          MAY THE FORCE BE WITH YOU
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes starfield {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        tbody tr {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Home;

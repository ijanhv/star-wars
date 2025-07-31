"use client";
import React, { useEffect, useState } from "react";

import MovieDetails from "@/components/movie-details";
import LoadingSpinner from "@/components/loading-spinner";
import ErrorMessage from "@/components/error-message";
import { Movie } from "@/lib/types";
import { fetchMovieById } from "@/lib/api";
import { useParams } from "next/navigation";

const MoviePage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const loadMovie = async () => {
      try {
        const data = await fetchMovieById(id as string);
        setMovie(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load movie details. Please try again later.");
        setLoading(false);
      }
    };
    loadMovie();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!movie) return null;

  return (
    <div className="">
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MoviePage;

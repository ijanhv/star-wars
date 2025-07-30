import { Movie } from '@/lib/types';
import axios from 'axios';

const BASE_URL = "https://swapi.info/api"

export const fetchMovies = async (): Promise<Movie[]> => {
  const response = await axios(`${BASE_URL}/films`);
  const data = response.data

  return data;
};

export const fetchMovieById = async (id: string): Promise<Movie> => {
  const response = await fetch(`${BASE_URL}/films/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }
  return response.json();
};
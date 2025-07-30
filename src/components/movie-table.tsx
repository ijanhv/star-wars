import React, { useState } from "react";
import Link from "next/link";
import { Movie } from "@/lib/types";

interface MovieTableProps {
  movies: Movie[];
}

const MovieTable: React.FC<MovieTableProps> = ({ movies }) => {
  const [sortField, setSortField] = useState<keyof Movie>("title");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (field: keyof Movie) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortedMovies = [...movies].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    if (sortField === "release_date") {
      const aDate =
        typeof aValue === "string"
          ? aValue
          : Array.isArray(aValue)
          ? aValue[0]
          : "";
      const bDate =
        typeof bValue === "string"
          ? bValue
          : Array.isArray(bValue)
          ? bValue[0]
          : "";
      return sortOrder === "asc"
        ? new Date(aDate).getTime() - new Date(bDate).getTime()
        : new Date(bDate).getTime() - new Date(aDate).getTime();
    }
    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortOrder === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    }
    if (Array.isArray(aValue) && Array.isArray(bValue)) {
      const aStr = aValue.join(", ");
      const bStr = bValue.join(", ");
      return sortOrder === "asc"
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    }
    return 0;
  });

  return (
    <div className="overflow-x-auto">
      <div className="relative p-8 bg-gradient-to-r from-gray-800/80 to-gray-900/80 border rounded-md border-cyan-400/30">
        <div className=" inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5"></div>
        <table className="min-w-full overflow-hidden">
          <thead>
            <tr>
              <th
                className="px-6 py-3 text-left cursor-pointer hover:text-yellow-400"
                onClick={() => handleSort("title")}
              >
                Title{" "}
                {sortField === "title" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th className="px-6 py-3 text-left cursor-pointer hover:text-yellow-400">
                Producer
              </th>
              <th
                className="px-6 py-3 text-left cursor-pointer hover:text-yellow-400"
                onClick={() => handleSort("release_date")}
              >
                Release Date{" "}
                {sortField === "release_date" &&
                  (sortOrder === "asc" ? "↑" : "↓")}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedMovies.map(
              (movie) => (
                console.log(movie.url.split("/").slice(-1)[0]),
                (
                  <tr
                    key={movie.url}
                    className="border-t border-gray-700 hover:bg-gray-800/40 "
                  >
                    <td className="px-6 py-6">
                      <Link
                        href={`/movies/${movie.url.split("/").slice(-1)[0]}`}
                        className="text-yellow-400 hover:underline"
                      >
                        {movie.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4">{movie.producer}</td>
                    <td className="px-6 py-4">{movie.release_date}</td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieTable;

import { useLocation } from "@tanstack/react-router";
import moviesCardInfo from "../../../mock/movies";
import MoviesCategoryBox from "../../Modules/MoviesCategoryBox/MoviesCategoryBox";
import showsCardInfo from "../../../mock/showsInfo";

export default function MoviesBoxWrapper() {
  const { pathname } = useLocation();

  return (
    <div className="my-20 max-w-[100%]">
      <div className="border border-gray-90 dark:border-black-15 p-12 rounded-xl relative">
        <div className="text-white px-4 py-2 bg-red-45 rounded-lg absolute top-0 -translate-y-1/2 left-12">
          {pathname === "/movies" ? <span>Movies</span> : <span>Shows</span>}
        </div>
        <div className="space-y-24">
          {pathname === "/movies"
            ? moviesCardInfo().map((category, index) => (
                <MoviesCategoryBox key={index} {...category} />
              ))
            : showsCardInfo().map((category, index) => (
                <MoviesCategoryBox key={index} {...category} />
              ))}
        </div>
      </div>
    </div>
  );
}

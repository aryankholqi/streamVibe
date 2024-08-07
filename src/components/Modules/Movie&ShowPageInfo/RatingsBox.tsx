import { movieRatingProps } from "../../../interfaces/movieRatingProps.interface";
import StarRating from "../StarRating/StarRating";

export default function RatingsBox({
  title,
  movieRate,
  icon: Icon,
}: movieRatingProps) {
  return (
    <div className="p-4 bg-gray-90 dark:bg-black-8 rounded-lg space-y-1">
      <div className="flex items-center gap-2 text-sm md:text-lg">
        <Icon />
        {title}
      </div>
      <div className="flex items-center gap-1">
        <StarRating rate={movieRate} isEditable={false} />
        <span>{movieRate}</span>
      </div>
    </div>
  );
}
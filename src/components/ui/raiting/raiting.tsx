import { FC } from "react";

import { HalfStarIcon } from "@/styles/assets/icons/har-star";
import { RatingIcon } from "@/styles/assets/icons/star-icon";

type RatingProps = {
  value: number;
};
export const Rating: FC<RatingProps> = ({ value }) => {
  const stars = [];
  const filledStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;

  // Создание заполненных звезд
  for (let i = 0; i < filledStars; i++) {
    stars.push(<RatingIcon key={i} />);
  }

  // Добавление половинки звезды, если есть
  if (hasHalfStar) {
    stars.push(<HalfStarIcon key="half" />);
  }

  // Дополнение пустыми звездами до полного рейтинга (например, 5 звезд)
  while (stars.length < 5) {
    stars.push(<RatingIcon key={stars.length} />);
  }

  return <div>{stars}</div>;
};

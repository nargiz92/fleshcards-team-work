import { FC } from "react";

import * as Slider from "@radix-ui/react-slider";

import s from "./slider.module.scss";

type Props = {
  values: number[];
  onChange: (values: number[]) => void;
  onValueCommit: (value: number[]) => void;
};
export const Ranger: FC<Props> = ({ values, onChange, onValueCommit }) => {
  return (
    <form className={s.ranger}>
      <span id={"hw11-value-1"} className={s.number}>
        {values[0]}
      </span>
      <Slider.Root
        className={s.SliderRoot}
        defaultValue={[1, 100]}
        max={100}
        step={1}
        onValueChange={onChange}
        onValueCommit={onValueCommit}
        minStepsBetweenThumbs={1}
      >
        <Slider.Track className={s.SliderTrack}>
          <Slider.Range className={s.SliderRange} />
        </Slider.Track>
        <Slider.Thumb className={s.SliderThumb} aria-label="Volume" />
        <Slider.Thumb className={s.SliderThumb} aria-label="Volume ." />
      </Slider.Root>
      <span id={"hw11-value-1"} className={s.number}>
        {values[1]}
      </span>
    </form>
  );
};

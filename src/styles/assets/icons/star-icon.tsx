import { SVGProps, Ref, forwardRef } from "react";
const RatingIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="gold"
      d="M15.56 20a1 1 0 0 1-.46-.11L10 17.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63-4.12-4a1 1 0 0 1-.25-1 1 1 0 0 1 .81-.68l5.7-.83L9.1 1.56a1 1 0 0 1 1.8 0l2.54 5.12 5.7.83a1 1 0 0 1 .81.68 1 1 0 0 1-.25 1l-4.12 4 1 5.63a1 1 0 0 1-.4 1 1 1 0 0 1-.62.18Z"
    />
  </svg>
);
const ForwardRef = forwardRef(RatingIcon);

export { ForwardRef as RatingIcon };

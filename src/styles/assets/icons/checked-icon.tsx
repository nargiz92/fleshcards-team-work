import { SVGProps, Ref, forwardRef } from "react";
const CheckedIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 12.611 8.923 17.5 20 6.5"
    />
  </svg>
);
const ForwardRef = forwardRef(CheckedIcon);

export { ForwardRef as CheckedIcon };

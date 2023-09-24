import { SVGProps, Ref, forwardRef } from "react";
const UsersIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 21a7 7 0 1 1 14 0M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(UsersIcon);

export { ForwardRef as UsersIcon };

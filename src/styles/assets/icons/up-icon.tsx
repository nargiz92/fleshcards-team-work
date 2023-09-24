import { SVGProps, Ref, forwardRef } from "react";
const UpIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    ref={ref}
    viewBox="0 0 24 24"
  >
    <path
      fill="#fff"
      d="M19.542 14.514a1.001 1.001 0 0 1-1.64.77l-5.36-4.48-5.37 4.32a1 1 0 0 1-1.41-.15 1 1 0 0 1 .15-1.46l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .36.83Z"
    />
  </svg>
);
const ForwardRef = forwardRef(UpIcon);

export { ForwardRef as UpIcon };

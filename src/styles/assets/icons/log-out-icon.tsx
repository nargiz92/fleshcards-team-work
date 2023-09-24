import { SVGProps, Ref, forwardRef } from "react";
const LogOutIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <title>{"ionicons-v5-o"}</title>
    <path
      d="M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256"
      style={{
        fill: "none",
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(LogOutIcon);

export { ForwardRef as LogOutIcon };

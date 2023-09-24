import { SVGProps, Ref, forwardRef } from "react";
const DeleteIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    ref={ref}
  >
    <path
      fill="#f9f7ff"
      d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 1 0 0-2ZM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4V4.33ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12v11Z"
    />
  </svg>
);
const ForwardRef = forwardRef(DeleteIcon);

export { ForwardRef as DeleteIcon };

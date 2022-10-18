import { SVGProps } from "react";

const SubmitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="18"
      fill="none"
      viewBox="0 0 21 18"
    >
      <path fill="#fff" d="M0 18l21-9L0 0v7l15 2-15 2v7z"></path>
    </svg>
  );
}

export default SubmitIcon;

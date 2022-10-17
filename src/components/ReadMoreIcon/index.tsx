import { SVGProps } from "react";

const ReadMoreIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="16"
      fill="none"
      viewBox="0 0 24 16"
    >
      <path
        fill="#032937"
        d="M10.024 0h6.015L24 8l-7.961 8h-6.015l7.961-8-7.961-8zM0 16h6.015l7.961-8-7.961-8H0l7.961 8L0 16z"
      ></path>
    </svg>
  );
}

export default ReadMoreIcon;

import React from "react";

interface CustomIconProps {
  className?: string;
}

const SandboxIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="20"
      // height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.7 1.66699H7.29995C4.16662 1.66699 3.92495 4.48366 5.61662 6.01699L14.3833 13.9837C16.075 15.517 15.8333 18.3337 12.7 18.3337H7.29995C4.16662 18.3337 3.92495 15.517 5.61662 13.9837L14.3833 6.01699C16.075 4.48366 15.8333 1.66699 12.7 1.66699Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SandboxIcon;

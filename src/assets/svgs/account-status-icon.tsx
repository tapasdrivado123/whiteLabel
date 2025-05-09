import React from "react";

interface IconProps {
  className?: string;
}

const AccountStatusIcon: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg
      //   width="16"
      //   height="16"
      //   viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.6666 1.33337H5.33325C2.66659 1.33337 1.33325 2.66671 1.33325 5.33337V14C1.33325 14.3667 1.63325 14.6667 1.99992 14.6667H10.6666C13.3333 14.6667 14.6666 13.3334 14.6666 10.6667V5.33337C14.6666 2.66671 13.3333 1.33337 10.6666 1.33337Z"
        stroke="#0D0D0D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.60661 5.22665L5.14661 8.68665C5.01328 8.81998 4.88661 9.07998 4.85995 9.26665L4.67328 10.5866C4.60661 11.0666 4.93994 11.4 5.41994 11.3333L6.73993 11.1466C6.9266 11.12 7.18662 10.9933 7.31995 10.86L10.78 7.39998C11.3733 6.80665 11.66 6.11331 10.78 5.23331C9.89995 4.34664 9.20661 4.62665 8.60661 5.22665Z"
        stroke="#0D0D0D"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.11328 5.71997C8.40661 6.76664 9.22661 7.5933 10.2799 7.88664"
        stroke="#0D0D0D"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default AccountStatusIcon;

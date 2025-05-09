import React from "react";

interface CustomIconProps {
  className?: string;
}

const PermissionButtonIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="20"
      // height="20"
      // viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.3333 14.5835H12.5"
        stroke="currentColor"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16669 14.5835H1.66669"
        stroke="currentColor"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3333 5.4165H15.8333"
        stroke="currentColor"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.50002 5.4165H1.66669"
        stroke="currentColor"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83335 12.0835H10.8334C11.75 12.0835 12.5 12.5002 12.5 13.7502V15.4168C12.5 16.6668 11.75 17.0835 10.8334 17.0835H5.83335C4.91669 17.0835 4.16669 16.6668 4.16669 15.4168V13.7502C4.16669 12.5002 4.91669 12.0835 5.83335 12.0835Z"
        stroke="currentColor"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.16667 2.9165H14.1667C15.0833 2.9165 15.8333 3.33317 15.8333 4.58317V6.24984C15.8333 7.49984 15.0833 7.9165 14.1667 7.9165H9.16667C8.25 7.9165 7.5 7.49984 7.5 6.24984V4.58317C7.5 3.33317 8.25 2.9165 9.16667 2.9165Z"
        stroke="currentColor"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default PermissionButtonIcon;

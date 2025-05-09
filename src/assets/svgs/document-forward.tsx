import React from "react";

interface IconProps {
  className?: string;
}

const DocumentForwardIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.33341 11.3332L8.66675 9.99984L7.33341 8.6665L8.66675 9.99984H4.66675"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6666 6.66683V10.0002C14.6666 13.3335 13.3333 14.6668 9.99992 14.6668H5.99992C2.66659 14.6668 1.33325 13.3335 1.33325 10.0002V6.00016C1.33325 2.66683 2.66659 1.3335 5.99992 1.3335H9.33325"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6666 6.66683H11.9999C9.99992 6.66683 9.33325 6.00016 9.33325 4.00016V1.3335L14.6666 6.66683Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DocumentForwardIcon;

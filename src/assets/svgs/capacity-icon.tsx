import React from "react";

interface CustomIconProps {
  className?: string;
}

const CapacityIcon: React.FC<CustomIconProps> = ({ className }) => {
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
        d="M7.63289 9.05866C7.54956 9.05033 7.44956 9.05033 7.35789 9.05866C5.37456 8.99199 3.79956 7.36699 3.79956 5.36699C3.79956 3.32533 5.44956 1.66699 7.49956 1.66699C9.54123 1.66699 11.1996 3.32533 11.1996 5.36699C11.1912 7.36699 9.61623 8.99199 7.63289 9.05866Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6752 3.33301C15.2919 3.33301 16.5919 4.64134 16.5919 6.24967C16.5919 7.82467 15.3419 9.10801 13.7836 9.16634C13.7169 9.15801 13.6419 9.15801 13.5669 9.16634"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.46636 12.133C1.44969 13.483 1.44969 15.683 3.46636 17.0247C5.75802 18.558 9.51636 18.558 11.808 17.0247C13.8247 15.6747 13.8247 13.4747 11.808 12.133C9.52469 10.608 5.76636 10.608 3.46636 12.133Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.2832 16.667C15.8832 16.542 16.4499 16.3003 16.9165 15.942C18.2165 14.967 18.2165 13.3587 16.9165 12.3837C16.4582 12.0337 15.8999 11.8003 15.3082 11.667"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default CapacityIcon;

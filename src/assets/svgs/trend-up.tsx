import { TSVG } from "@/lib/types/svg";

const TrendUp: React.FC<TSVG> = ({ className }) => {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 12.667L16.4 18.267L14.2667 15.067L10 19.3337"
        stroke="#FB4156"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.332 12.667H21.9987V15.3337"
        stroke="#FB4156"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0013 29.3337H20.0013C26.668 29.3337 29.3346 26.667 29.3346 20.0003V12.0003C29.3346 5.33366 26.668 2.66699 20.0013 2.66699H12.0013C5.33464 2.66699 2.66797 5.33366 2.66797 12.0003V20.0003C2.66797 26.667 5.33464 29.3337 12.0013 29.3337Z"
        stroke="#FB4156"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TrendUp;

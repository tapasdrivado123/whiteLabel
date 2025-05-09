import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const UserRoundIcon: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00033 8.00016C9.84127 8.00016 11.3337 6.50778 11.3337 4.66683C11.3337 2.82588 9.84127 1.3335 8.00033 1.3335C6.15938 1.3335 4.66699 2.82588 4.66699 4.66683C4.66699 6.50778 6.15938 8.00016 8.00033 8.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7268 14.6667C13.7268 12.0867 11.1601 10 8.0001 10C4.8401 10 2.27344 12.0867 2.27344 14.6667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserRoundIcon;

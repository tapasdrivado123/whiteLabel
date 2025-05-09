import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const WebsiteIcon: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      //   width="16"
      //   height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99316 11.6668H10.9998C13.0132 11.6668 14.6665 10.0202 14.6665 8.00016C14.6665 5.98683 13.0198 4.3335 10.9998 4.3335H9.99316"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.99967 4.3335H4.99967C2.97967 4.3335 1.33301 5.98016 1.33301 8.00016C1.33301 10.0135 2.97967 11.6668 4.99967 11.6668H5.99967"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33301 8H10.6663"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WebsiteIcon;

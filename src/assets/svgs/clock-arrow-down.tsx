import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const ClockArrowDownIcon: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6801 5.98023L10.4701 2.77023L8.51007 0.800234C7.68007 -0.0297656 6.33007 -0.0297656 5.50007 0.800234L0.320071 5.98023C-0.359929 6.66023 0.130071 7.82023 1.08007 7.82023H6.69007H12.9201C13.8801 7.82023 14.3601 6.66023 13.6801 5.98023Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export default ClockArrowDownIcon;

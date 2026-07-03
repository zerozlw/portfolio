interface XiaomiLogoProps {
  className?: string;
}

export function XiaomiLogo({ className = "h-5 w-5" }: XiaomiLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Orange rounded square */}
      <rect width="100" height="100" rx="20" fill="#FF6900" />
      {/* "mi" text */}
      <text
        x="50"
        y="68"
        textAnchor="middle"
        fill="white"
        fontSize="48"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        mi
      </text>
    </svg>
  );
}

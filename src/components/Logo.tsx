type LogoProps = {
  className?: string;
  title?: string;
};

export function Logo({ className, title = "English with Riadh" }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      className={className}
    >
      <rect width="64" height="64" rx="14" fill="#ff4742" />
      <path
        fill="#ffffff"
        fillRule="evenodd"
        d="M14 14H38C47 14 52 19 52 24C52 30 47 34 38 34L52 50H40L30 38H24V50H14V14ZM24 22H35C39 22 39 26 35 26H24V22Z"
      />
    </svg>
  );
}

const Rectangle = ({ className }: { className?: string }) => {
  return (
    <svg
      width="178"
      height="178"
      viewBox="0 0 178 178"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 0H178V78C178 133.228 133.228 178 78 178H0V0Z"
        fill="#F4F9FF"
      />
    </svg>
  );
};

export default Rectangle;

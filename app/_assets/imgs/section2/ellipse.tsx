const Ellipse = ({ className }: { className?: string }) => {
  return (
    <svg
      width="129"
      height="129"
      viewBox="0 0 129 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        opacity="0.42"
        cx="64.5"
        cy="64.5"
        r="64.5"
        fill="url(#paint0_linear_127_5394)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_127_5394"
          x1="126.967"
          y1="64.6042"
          x2="-8.13358e-07"
          y2="64.6042"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6C57DB" stop-opacity="0.2" />
          <stop offset="0.885417" stop-color="#E4DFFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Ellipse;

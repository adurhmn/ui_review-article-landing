const HeroDoor = ({ className }: { className?: string }) => (
  <svg
    width="296"
    height="406"
    viewBox="0 0 296 406"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g opacity="0.16">
      <mask id="path-1-inside-1_2733_108" fill="white">
        <path d="M38.0005 129C38.0005 57.7553 95.7558 0 167 0C238.245 0 296 57.7553 296 129V406H38.0005V129Z" />
      </mask>
      <path
        d="M36.0005 129C36.0005 56.6507 94.6512 -2 167 -2C239.35 -2 298 56.6507 298 129H294C294 58.8598 237.141 2 167 2C96.8603 2 40.0005 58.8598 40.0005 129H36.0005ZM296 406H38.0005H296ZM36.0005 406V129C36.0005 56.6507 94.6512 -2 167 -2V2C96.8603 2 40.0005 58.8598 40.0005 129V406H36.0005ZM167 -2C239.35 -2 298 56.6507 298 129V406H294V129C294 58.8598 237.141 2 167 2V-2Z"
        fill="#6C57DB"
        mask="url(#path-1-inside-1_2733_108)"
      />
    </g>
    <path
      d="M0.5 129C0.5 57.7553 58.2553 0 129.5 0C200.745 0 258.5 57.7553 258.5 129V406H0.5V129Z"
      fill="#00B8D9"
    />
    <path
      d="M0.5 129C0.5 57.7553 58.2553 0 129.5 0C200.745 0 258.5 57.7553 258.5 129V406H0.5V129Z"
      fill="url(#paint0_linear_2733_108)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2733_108"
        x1="258.5"
        y1="126.636"
        x2="6.02728"
        y2="126.531"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#6C57DB" />
        <stop offset="1" stop-color="#0C191F" stop-opacity="0.79" />
      </linearGradient>
    </defs>
  </svg>
);

export default HeroDoor;

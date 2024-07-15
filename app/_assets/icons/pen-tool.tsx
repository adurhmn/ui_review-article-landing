const PenTool = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 19L19 12L22 15L15 22L12 19Z"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M2 2L9.58579 9.58579" stroke="black" stroke-width="2" />
    <circle cx="11" cy="11" r="2" stroke="black" stroke-width="2" />
  </svg>
);

export default PenTool;

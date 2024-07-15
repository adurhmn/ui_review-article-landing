const Underline = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 3V10C6 11.5913 6.63214 13.1174 7.75736 14.2426C8.88258 15.3679 10.4087 16 12 16C13.5913 16 15.1174 15.3679 16.2426 14.2426C17.3679 13.1174 18 11.5913 18 10V3"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 21H20"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Underline;

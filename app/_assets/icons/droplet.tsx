const Droplet = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9999 2.69L17.6599 8.35C18.7792 9.46861 19.5417 10.8941 19.8508 12.4461C20.1599 13.998 20.0018 15.6068 19.3964 17.069C18.7911 18.5311 17.7657 19.7808 16.45 20.6601C15.1343 21.5394 13.5874 22.0087 12.0049 22.0087C10.4224 22.0087 8.87549 21.5394 7.55978 20.6601C6.24407 19.7808 5.2187 18.5311 4.61335 17.069C4.008 15.6068 3.84988 13.998 4.15899 12.4461C4.46809 10.8941 5.23054 9.46861 6.34989 8.35L11.9999 2.69Z"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Droplet;

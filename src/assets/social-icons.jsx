import React from "react";

export const IconFacebook = ({ size = 24, color = "#22d47b" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="6" fill="none" />
    <path
      d="M15.5 8.5H14V7.5C14 7.22 14.22 7 14.5 7H15.5V5H14.5C13.12 5 12 6.12 12 7.5V8.5H11V10.5H12V19H14V10.5H15L15.5 8.5Z"
      fill={color}
    />
  </svg>
);

export const IconTwitter = ({ size = 24, color = "#22d47b" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="6" fill="none" />
    <path
      d="M19 7.54C18.42 7.8 17.79 7.97 17.12 8.03C17.8 7.62 18.33 6.97 18.56 6.18C17.93 6.56 17.22 6.82 16.45 6.96C15.86 6.32 15.01 5.9 14.07 5.9C12.29 5.9 10.86 7.33 10.86 9.11C10.86 9.36 10.89 9.6 10.95 9.83C8.28 9.7 5.92 8.47 4.3 6.61C4.03 7.07 3.87 7.6 3.87 8.18C3.87 9.27 4.44 10.23 5.32 10.8C4.8 10.78 4.31 10.63 3.89 10.39V10.43C3.89 12.01 5.01 13.32 6.54 13.6C6.29 13.67 6.02 13.7 5.74 13.7C5.54 13.7 5.34 13.68 5.15 13.65C5.55 14.93 6.75 15.87 8.17 15.89C7.07 16.74 5.7 17.23 4.22 17.23C3.96 17.23 3.7 17.22 3.44 17.19C4.88 18.12 6.62 18.65 8.5 18.65C14.07 18.65 17.28 13.75 17.28 9.5C17.28 9.34 17.28 9.18 17.27 9.02C17.91 8.56 18.46 7.98 19 7.54Z"
      fill={color}
    />
  </svg>
);

export const IconLinkedIn = ({ size = 24, color = "#22d47b" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="6" fill="none" />
    <path
      d="M7.5 8.5C8.33 8.5 9 7.83 9 7C9 6.17 8.33 5.5 7.5 5.5C6.67 5.5 6 6.17 6 7C6 7.83 6.67 8.5 7.5 8.5ZM8.5 10H6.5V18H8.5V10ZM12.5 10H10.5V18H12.5V14.5C12.5 13.12 14 13 14 14.5V18H16V14C16 11.5 13.5 11.62 12.5 13V10Z"
      fill={color}
    />
  </svg>
);

export const IconInstagram = ({ size = 24, color = "#22d47b" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="6" fill="none" />
    <rect
      x="6"
      y="6"
      width="12"
      height="12"
      rx="4"
      stroke={color}
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" />
    <circle cx="16.5" cy="7.5" r="1" fill={color} />
  </svg>
);

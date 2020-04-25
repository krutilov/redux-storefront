import * as React from "react";

interface RemoveProps {
  size: number;
}

export const Remove: React.FC<RemoveProps> = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.82816 32.0289L32.0342 2.82871L29.2061 0L1.52588e-05 29.2002L2.82816 32.0289Z"
      fill="black"
    />
    <path
      d="M29.2061 32.0289L0 2.82871L2.82814 0L32.0342 29.2002L29.2061 32.0289Z"
      fill="black"
    />
  </svg>
);

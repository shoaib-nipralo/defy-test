import React from "react";

const TrainingIcon = (props) => {
  return (
    <svg
      width="29"
      height="25"
      viewBox="0 0 29 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M14.5 25L4.74992 19.3923V11.0589L0 8.33333L14.5 0L29 8.33333V19.3132H27.375V9.29977L24.2501 11.0589V19.3923L14.5 25ZM14.5 14.696L25.5988 8.33333L14.5 1.9707L3.40115 8.33333L14.5 14.696ZM14.5 23.0396L22.6251 18.3966V12.0047L14.5 16.6615L6.37493 12.0047V18.3966L14.5 23.0396Z"
        fill={props.fill}
      />
    </svg>
  );
};

export default TrainingIcon;

import * as React from "react";
import styled from "styled-components";

interface Props {
  radius: number;
  stroke: number;
}

export const ProgressRing: React.FC<Props> = ({ radius, stroke }) => {
  const [progress, setProgress] = React.useState<number>(0);
  const normalizedRadius: number = radius - stroke * 2;
  const circumference: number = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset: number =
    circumference - (progress / 100) * circumference;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress(progress + 10);
    }, 3000 / 10);

    if (progress === 100) {
      clearInterval(interval);
    }
  }, [progress]);

  return (
    <svg height={radius * 2} width={radius * 2}>
      <Circle
        stroke="#666666"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

const Circle = styled.circle`
  transition: 0.35s linear;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

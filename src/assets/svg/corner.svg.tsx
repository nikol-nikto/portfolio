/** @format */

interface Props {
  color?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
}

function CornerSvg({
  color = "black",
  width = 24,
  height = 24,
  strokeWidth = 2,
}: Props) {
  return (
    <svg viewBox="0 0 32 32" width={width} height={height}>
      <path
        d="M2 18 L2 2 L18 2"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CornerSvg;

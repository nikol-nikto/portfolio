/** @format */

interface Props {
  color?: string;
  width?: number;
  height?: number;
}

function VercelSvg({ color = "black", width = 24, height = 24 }: Props) {
  return (
    <svg viewBox="0 0 32 32" width={width} height={height}>
      <rect width="32" height="32" fill="#1a1a1a" rx="3" />
      <path d="M16 6L28 26H4L16 6z" fill={color} />
    </svg>
  );
}

export default VercelSvg;

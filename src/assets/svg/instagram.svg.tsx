/** @format */

interface Props {
  color?: string;
  width?: number;
  height?: number;
}

function InstagramSVG({ color = "black", width = 24, height = 24 }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      width={width}
      height={height}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill={color} stroke="none" />
    </svg>
  );
}

export default InstagramSVG;

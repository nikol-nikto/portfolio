/** @format */

interface Props {
  color?: string;
  width?: number;
  height?: number;
}

function VueSvg({ color = "black", width = 24, height = 24 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 48 48"
    >
      <polygon
        fill="#81c784"
        points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"
      ></polygon>
      <polygon
        fill="#455a64"
        points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"
      ></polygon>
    </svg>
  );
}

export default VueSvg;

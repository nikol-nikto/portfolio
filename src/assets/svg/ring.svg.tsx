/** @format */

interface Props {
  color?: string;
  scale?: number;
  dash?: string;
  rotation?: number;
}

function RingSVG({
  color = "black",
  scale = 1,
  dash = "",
  rotation = 0,
}: Props) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full z-1 overflow-visible
        transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}
      viewBox="0 0 506 506"
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <circle
        cx="253"
        cy="253"
        r="250"
        stroke="#00ff99"
        strokeWidth="3"
        strokeLinecap="round"
        fill={color}
        strokeDasharray={dash}
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: "50% 50%",
        }}
        className="drop-shadow-[0_0_6px_#00ff99]"
      />
    </svg>
  );
}

export default RingSVG;

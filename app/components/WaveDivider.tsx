interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
}

export default function WaveDivider({ topColor, bottomColor, flip = false }: WaveDividerProps) {
  return (
    <div className="relative h-24 w-full -mt-1 -mb-1" style={{ backgroundColor: bottomColor }}>
      <svg
        className="absolute h-full w-full"
        style={{ transform: flip ? 'rotate(180deg)' : 'none' }}
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0V50C240 84 480 84 720 67C960 50 1200 17 1440 17V0H0Z"
          fill={topColor}
        />
        <path
          d="M0 0V50C240 84 480 84 720 67C960 50 1200 17 1440 17"
          stroke="black"
          strokeWidth="1"
          strokeOpacity="0.2"
          fill="none"
        />
      </svg>
    </div>
  );
} 
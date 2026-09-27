"use client";

type PhilosophyDiagramProps = {
  input1a: string;
  input1b: string;
  input2a: string;
  input2b: string;
  input3a: string;
  input3b: string;
  center1: string;
  center2: string;
  outcome1: string;
  outcome2: string;
};

const ACCENT = "#c2995b";
const WAVE_DURATION = 2.4;
const WAVE_GAP = 1.2;
const OUT_DURATION = 1.6;

function FlowDot({
  path,
  begin,
  duration,
}: {
  path: string;
  begin: number;
  duration: number;
}) {
  return (
    <circle r="3.5" fill={ACCENT} opacity="0">
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        keyTimes="0;0.08;0.88;1"
        dur={`${duration}s`}
        begin={`${begin}s`}
        repeatCount="indefinite"
      />
      <animateMotion
        path={path}
        dur={`${duration}s`}
        begin={`${begin}s`}
        repeatCount="indefinite"
        calcMode="linear"
      />
    </circle>
  );
}

function IconCircle({ cx, cy }: { cx: number; cy: number }) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r="22"
      fill="none"
      stroke={ACCENT}
      strokeWidth="1.5"
    />
  );
}

export function PhilosophyDiagram({
  input1a,
  input1b,
  input2a,
  input2b,
  input3a,
  input3b,
  center1,
  center2,
  outcome1,
  outcome2,
}: PhilosophyDiagramProps) {
  // Same start point X so path lengths stay close; same duration → arrive together
  const path1 = "M 88 70 C 155 70, 200 150, 248 150";
  const path2 = "M 88 150 L 248 150";
  const path3 = "M 88 230 C 155 230, 200 150, 248 150";
  const pathOut = "M 272 150 L 400 150";

  // Wave 0: all 3 rows start together; Wave 1: same again
  const waves = [0, WAVE_GAP];

  return (
    <div className="relative w-full max-w-[520px]" aria-hidden>
      <svg
        viewBox="0 0 520 300"
        className="h-auto w-full overflow-visible"
        role="img"
      >
        <defs>
          <style>{`
            @keyframes paa-ring-pulse {
              0%, 100% { opacity: 0.35; }
              50% { opacity: 1; }
            }
            .paa-ring { animation: paa-ring-pulse 2.4s ease-in-out infinite; }
            .paa-ring-2 { animation-delay: 0.35s; }
            .paa-ring-3 { animation-delay: 0.7s; }
            @media (prefers-reduced-motion: reduce) {
              .paa-ring { animation: none; opacity: 0.75; }
              .paa-motion-dot { display: none; }
            }
          `}</style>
        </defs>

        <path d={path1} fill="none" stroke={ACCENT} strokeWidth="1.25" opacity="0.85" />
        <path d={path2} fill="none" stroke={ACCENT} strokeWidth="1.25" opacity="0.85" />
        <path d={path3} fill="none" stroke={ACCENT} strokeWidth="1.25" opacity="0.85" />
        <path d={pathOut} fill="none" stroke={ACCENT} strokeWidth="1.25" opacity="0.85" />

        <g className="paa-motion-dot">
          {waves.map((wave) => (
            <g key={wave}>
              {/* 3 rows leave together and reach center together */}
              <FlowDot path={path1} begin={wave} duration={WAVE_DURATION} />
              <FlowDot path={path2} begin={wave} duration={WAVE_DURATION} />
              <FlowDot path={path3} begin={wave} duration={WAVE_DURATION} />
              {/* Continue to outcome after arriving at center */}
              <FlowDot
                path={pathOut}
                begin={wave + WAVE_DURATION * 0.92}
                duration={OUT_DURATION}
              />
            </g>
          ))}
        </g>

        {/* Input 1 — bar chart */}
        <g>
          <IconCircle cx={58} cy={70} />
          <path
            d="M49 79 V64 M49 79 H67"
            stroke={ACCENT}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M53 79 V70 M58 79 V66 M63 79 V73"
            stroke={ACCENT}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <Label cx={58} y1={104} y2={115} a={input1a} b={input1b} />
        </g>

        {/* Input 2 — layered value / stack (real value) */}
        <g>
          <IconCircle cx={58} cy={150} />
          <path
            d="M48 146 L58 140 L68 146 L58 152 Z"
            fill="none"
            stroke={ACCENT}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M48 152 L58 146 L68 152 L58 158 Z"
            fill="none"
            stroke={ACCENT}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M48 158 L58 152 L68 158 L58 164 Z"
            fill="none"
            stroke={ACCENT}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <Label cx={58} y1={184} y2={195} a={input2a} b={input2b} />
        </g>

        {/* Input 3 — person / capability */}
        <g>
          <IconCircle cx={58} cy={230} />
          <circle cx={58} cy={223} r={4.5} fill="none" stroke={ACCENT} strokeWidth="1.5" />
          <path
            d="M47 241 C47 232.5, 69 232.5, 69 241"
            fill="none"
            stroke={ACCENT}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <Label cx={58} y1={264} y2={275} a={input3a} b={input3b} />
        </g>

        {/* Center rings */}
        <g>
          <circle cx={260} cy={150} r={36} fill="none" stroke={ACCENT} strokeWidth="1" className="paa-ring paa-ring-3" />
          <circle cx={260} cy={150} r={26} fill="none" stroke={ACCENT} strokeWidth="1.25" className="paa-ring paa-ring-2" />
          <circle cx={260} cy={150} r={16} fill="none" stroke={ACCENT} strokeWidth="1.5" className="paa-ring" />
          <circle cx={260} cy={150} r={5} fill={ACCENT} />
          <text
            x={260}
            y={204}
            textAnchor="middle"
            fill={ACCENT}
            style={{ fontSize: 9, letterSpacing: 1, fontWeight: 500 }}
          >
            {center1}
          </text>
          <text
            x={260}
            y={216}
            textAnchor="middle"
            fill={ACCENT}
            style={{ fontSize: 9, letterSpacing: 1, fontWeight: 500 }}
          >
            {center2}
          </text>
        </g>

        {/* Outcome — rising trend chart */}
        <g>
          <IconCircle cx={430} cy={150} />
          <path
            d="M419 162 H441 M419 162 V140"
            stroke={ACCENT}
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M422 156 L427 149 L432 152 L439 141"
            stroke={ACCENT}
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx={439} cy={141} r={2} fill={ACCENT} />
          <Label cx={430} y1={190} y2={201} a={outcome1} b={outcome2} />
        </g>
      </svg>
    </div>
  );
}

function Label({
  cx,
  y1,
  y2,
  a,
  b,
}: {
  cx: number;
  y1: number;
  y2: number;
  a: string;
  b: string;
}) {
  return (
    <>
      <text
        x={cx}
        y={y1}
        textAnchor="middle"
        fill={ACCENT}
        style={{ fontSize: 8, letterSpacing: 0.5, fontWeight: 500 }}
      >
        {a}
      </text>
      <text
        x={cx}
        y={y2}
        textAnchor="middle"
        fill={ACCENT}
        style={{ fontSize: 8, letterSpacing: 0.5, fontWeight: 500 }}
      >
        {b}
      </text>
    </>
  );
}

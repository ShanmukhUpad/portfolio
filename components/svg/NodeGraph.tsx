const NODES: [number, number][] = [
  [120, 100], [260, 180], [90, 260], [320, 90], [480, 150],
  [620, 80], [750, 200], [900, 120], [1080, 90], [1220, 180],
  [1340, 100], [180, 480], [380, 560], [560, 500], [780, 580],
  [950, 500], [1150, 560], [1300, 480], [60, 620], [1380, 620],
];

const EDGES: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10],
  [1, 2], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17],
  [11, 18], [17, 19], [2, 11], [9, 17], [4, 13],
];

const HIGHLIGHTS = new Set([5, 14]);

/** Decorative network behind the hero; edges draw in, then the nodes appear (see globals.css). */
export function NodeGraph() {
  return (
    <svg
      viewBox="0 0 1440 700"
      preserveAspectRatio="xMidYMid slice"
      className="node-graph pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    >
      {EDGES.map(([a, b], i) => {
        const [x1, y1] = NODES[a];
        const [x2, y2] = NODES[b];
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            pathLength={1}
            style={{ "--i": i } as React.CSSProperties}
          />
        );
      })}
      {NODES.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={HIGHLIGHTS.has(i) ? 5 : 3}
          className={HIGHLIGHTS.has(i) ? "is-hub" : undefined}
          style={{ "--i": i } as React.CSSProperties}
        />
      ))}
    </svg>
  );
}

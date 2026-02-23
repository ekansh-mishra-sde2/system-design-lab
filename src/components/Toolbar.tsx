interface Props {
  enabled?: boolean;
  allowedTools?: string[];
}

const ALL_TOOLS = [
  "Client",
  "Server",
  "Database",
  "CDN",
  "Redis",
  "Load Balancer",
];

export default function Toolbar({
  enabled = true,
  allowedTools = ALL_TOOLS,
}: Props) {
  return (
    <div className="toolbar-fixed">
      {ALL_TOOLS.map((tool) => {
        const isAllowed = allowedTools.includes(tool);

        return (
          <div
            key={tool}
            className={`tool-item ${!enabled || !isAllowed ? "disabled" : ""}`}
          >
            {tool}
          </div>
        );
      })}
    </div>
  );
}

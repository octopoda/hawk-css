"use client";

import CodeBlock from "./CodeBlock";
import FieldNote from "./FieldNote";

interface MdxContentProps {
  content: string;
}

interface ParsedBlock {
  type: "paragraph" | "heading" | "code" | "fieldnote" | "list" | "orderedlist" | "table";
  content: string;
  language?: string;
  filename?: string;
  level?: number;
  tableHeaders?: string[];
  tableRows?: string[][];
}

function parseMarkdown(md: string): ParsedBlock[] {
  const blocks: ParsedBlock[] = [];
  const lines = md.split("\n");
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("```")) {
      const langMatch = line.match(/^```(\w*)\s*(?:\{([^}]*)\})?/);
      const language = langMatch?.[1] || "";
      const metaStr = langMatch?.[2] || "";
      const filenameMatch = metaStr.match(/filename="([^"]+)"/);
      const filename = filenameMatch?.[1] || "";
      i++;
      const codeLines: string[] = [];
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++;
      blocks.push({
        type: "code",
        content: codeLines.join("\n"),
        language,
        filename,
      });
      continue;
    }

    if (line.startsWith("> **Hearthian Field Note") || line.startsWith("> 🔭") || line.startsWith("> **Try")) {
      const noteLines: string[] = [];
      while (i < lines.length && (lines[i].startsWith("> ") || lines[i] === ">")) {
        noteLines.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      const noteContent = noteLines.join("\n").replace(/^\*\*[^*]+\*\*:?\s*/, "");
      blocks.push({ type: "fieldnote", content: noteContent });
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)/);
    if (headingMatch) {
      blocks.push({
        type: "heading",
        content: headingMatch[2],
        level: headingMatch[1].length,
      });
      i++;
      continue;
    }

    if (line.match(/^\|.*\|$/)) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].match(/^\|.*\|$/)) {
        tableLines.push(lines[i]);
        i++;
      }
      const separatorIndex = tableLines.findIndex((l) =>
        l.match(/^\|[\s\-:|]+\|$/)
      );
      if (separatorIndex >= 0 && separatorIndex > 0) {
        const headerLine = tableLines[separatorIndex - 1];
        const headers = headerLine
          .split("|")
          .filter((c) => c.trim() !== "")
          .map((c) => c.trim());
        const dataLines = tableLines.filter((_, idx) => idx !== separatorIndex && idx !== separatorIndex - 1);
        const rows = dataLines.map((row) =>
          row
            .split("|")
            .filter((c) => c.trim() !== "")
            .map((c) => c.trim())
        );
        blocks.push({
          type: "table",
          content: "",
          tableHeaders: headers,
          tableRows: rows,
        });
      } else {
        for (const tl of tableLines) {
          blocks.push({ type: "paragraph", content: tl });
        }
      }
      continue;
    }

    if (line.match(/^[-*]\s/)) {
      const listLines: string[] = [];
      while (i < lines.length && lines[i].match(/^[-*]\s/)) {
        listLines.push(lines[i].replace(/^[-*]\s/, ""));
        i++;
      }
      blocks.push({ type: "list", content: listLines.join("\n") });
      continue;
    }

    if (line.match(/^\d+\.\s/)) {
      const listLines: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\.\s/)) {
        listLines.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      blocks.push({ type: "orderedlist", content: listLines.join("\n") });
      continue;
    }

    if (line.trim() === "") {
      i++;
      continue;
    }

    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("```") &&
      !lines[i].startsWith("> ") &&
      !lines[i].match(/^[-*]\s/) &&
      !lines[i].match(/^\d+\.\s/) &&
      !lines[i].match(/^\|.*\|$/)
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push({ type: "paragraph", content: paraLines.join(" ") });
    }
  }

  return blocks;
}

type InlineMatch = { index: number; length: number; node: React.ReactNode };

function renderInlineMarkdown(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const codeMatch = remaining.match(/`([^`]+)`/);
    const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);

    const candidates: InlineMatch[] = [];

    if (codeMatch && codeMatch.index !== undefined) {
      candidates.push({
        index: codeMatch.index,
        length: codeMatch[0].length,
        node: (
          <code key={key++} className="px-1.5 py-0.5 rounded bg-bg-space border border-border-subtle text-accent-orange font-mono text-[0.85em]">
            {codeMatch[1]}
          </code>
        ),
      });
    }

    if (boldMatch && boldMatch.index !== undefined) {
      candidates.push({
        index: boldMatch.index,
        length: boldMatch[0].length,
        node: <strong key={key++} className="font-bold text-text-primary">{boldMatch[1]}</strong>,
      });
    }

    if (linkMatch && linkMatch.index !== undefined) {
      candidates.push({
        index: linkMatch.index,
        length: linkMatch[0].length,
        node: (
          <a key={key++} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-accent-orange underline hover:brightness-110">
            {linkMatch[1]}
          </a>
        ),
      });
    }

    if (candidates.length > 0) {
      candidates.sort((a, b) => a.index - b.index);
      const earliest = candidates[0];
      if (earliest.index > 0) {
        parts.push(remaining.slice(0, earliest.index));
      }
      parts.push(earliest.node);
      remaining = remaining.slice(earliest.index + earliest.length);
    } else {
      parts.push(remaining);
      remaining = "";
    }
  }

  return parts;
}

export default function MdxContent({ content }: MdxContentProps) {
  const blocks = parseMarkdown(content);

  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading": {
            const Tag = `h${block.level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
            const sizes: Record<number, string> = {
              1: "text-2xl",
              2: "text-xl",
              3: "text-lg",
              4: "text-base",
            };
            return (
              <Tag
                key={i}
                className={`font-heading font-bold ${sizes[block.level ?? 3] ?? "text-base"} text-text-primary mt-6 mb-2`}
              >
                {renderInlineMarkdown(block.content)}
              </Tag>
            );
          }
          case "code":
            return (
              <CodeBlock key={i} language={block.language} filename={block.filename}>
                {block.content}
              </CodeBlock>
            );
          case "fieldnote":
            return (
              <FieldNote key={i}>{renderInlineMarkdown(block.content)}</FieldNote>
            );
          case "list":
            return (
              <ul key={i} className="list-disc list-inside space-y-1 text-text-primary text-sm leading-relaxed pl-2">
                {block.content.split("\n").map((item, j) => (
                  <li key={j}>{renderInlineMarkdown(item)}</li>
                ))}
              </ul>
            );
          case "orderedlist":
            return (
              <ol key={i} className="list-decimal list-inside space-y-1 text-text-primary text-sm leading-relaxed pl-2">
                {block.content.split("\n").map((item, j) => (
                  <li key={j}>{renderInlineMarkdown(item)}</li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div key={i} className="my-4 overflow-x-auto rounded-lg border border-border-subtle">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="bg-bg-surface border-b border-border-subtle">
                      {block.tableHeaders?.map((h, j) => (
                        <th key={j} className="px-4 py-2.5 font-heading font-bold text-accent-orange text-xs uppercase tracking-wider">
                          {renderInlineMarkdown(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.tableRows?.map((row, j) => (
                      <tr key={j} className="border-b border-border-subtle/50 last:border-0 hover:bg-bg-surface-hover/30 transition-colors">
                        {row.map((cell, k) => (
                          <td key={k} className="px-4 py-2.5 text-text-primary">
                            {renderInlineMarkdown(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "paragraph":
          default:
            return (
              <p key={i} className="text-text-primary text-sm leading-relaxed">
                {renderInlineMarkdown(block.content)}
              </p>
            );
        }
      })}
    </div>
  );
}

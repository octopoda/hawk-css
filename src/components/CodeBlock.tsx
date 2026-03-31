"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({
  children,
  language = "",
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(children.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="my-4 rounded-lg overflow-hidden border border-border-subtle bg-bg-space">
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 bg-bg-surface/50 border-b border-border-subtle">
          <span className="text-text-muted text-xs font-mono">
            {filename || language}
          </span>
          <button
            onClick={handleCopy}
            className="text-text-muted hover:text-accent-orange transition-colors p-1"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-text-primary">{children.trim()}</code>
      </pre>
    </div>
  );
}

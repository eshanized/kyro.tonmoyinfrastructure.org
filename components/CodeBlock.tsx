"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "bash",
  filename,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (_err) {
      // Fallback
    }
  };

  const lines = code.trim().split("\n");

  return (
    <div className="relative my-4 overflow-hidden rounded-lg border border-border bg-black/90 text-foreground font-mono text-xs sm:text-sm shadow-md">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-border/80 bg-surface px-4 py-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-emerald-500" />
          <span className="font-semibold text-foreground/80">{filename || language}</span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded px-2 py-1 text-[11px] font-sans font-medium text-muted-foreground hover:bg-surface-hover hover:text-foreground transition-colors"
          aria-label={copied ? "Copied code" : "Copy code"}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              <span className="text-emerald-500 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <div className="overflow-x-auto p-4 leading-relaxed">
        {showLineNumbers ? (
          <table className="w-full border-collapse">
            <tbody>
              {lines.map((line, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="w-8 select-none pr-4 text-right text-gray-500 opacity-60">
                    {idx + 1}
                  </td>
                  <td className="whitespace-pre text-emerald-400/90">{line}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <pre className="text-emerald-300/95 whitespace-pre font-mono">
            <code>{code.trim()}</code>
          </pre>
        )}
      </div>
    </div>
  );
}

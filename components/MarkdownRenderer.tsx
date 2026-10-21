"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, ExternalLink } from "lucide-react";
import { CodeBlock } from "@/components/CodeBlock";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

/**
 * Parses inline markdown:
 * - Bold: **text** or __text__
 * - Italic: *text* or _text_
 * - Inline code: `code`
 * - Links: [label](url)
 */
function renderInline(text: string): React.ReactNode[] {
  const elements: React.ReactNode[] = [];
  // Regex to match inline code, bold, italic, and links
  const pattern = /(`[^`]+`|\*\*[^*]+\*\*|__[^_]+__|(?<!\*)\*[^*]+\*(?!\*)|(?<!_)_[^_]+_(?!_)|\[[^\]]+\]\([^)]+\))/g;
  
  let lastIdx = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    const matchStart = match.index;
    const matchText = match[0];

    // Push preceding text if any
    if (matchStart > lastIdx) {
      elements.push(text.slice(lastIdx, matchStart));
    }

    if (matchText.startsWith("`") && matchText.endsWith("`")) {
      const code = matchText.slice(1, -1);
      elements.push(
        <code
          key={`code-${matchStart}`}
          className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-[11px] sm:text-xs text-emerald-400 border border-emerald-500/20"
        >
          {code}
        </code>
      );
    } else if (
      (matchText.startsWith("**") && matchText.endsWith("**")) ||
      (matchText.startsWith("__") && matchText.endsWith("__"))
    ) {
      const inner = matchText.slice(2, -2);
      elements.push(
        <strong key={`bold-${matchStart}`} className="font-semibold text-foreground">
          {renderInline(inner)}
        </strong>
      );
    } else if (
      (matchText.startsWith("*") && matchText.endsWith("*")) ||
      (matchText.startsWith("_") && matchText.endsWith("_"))
    ) {
      const inner = matchText.slice(1, -1);
      elements.push(
        <em key={`italic-${matchStart}`} className="italic text-foreground/90">
          {renderInline(inner)}
        </em>
      );
    } else if (matchText.startsWith("[") && matchText.includes("](")) {
      const closingBracket = matchText.indexOf("](");
      const label = matchText.slice(1, closingBracket);
      const url = matchText.slice(closingBracket + 2, -1);
      const isExternal = url.startsWith("http://") || url.startsWith("https://");

      if (isExternal) {
        elements.push(
          <a
            key={`link-${matchStart}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-emerald-400 underline underline-offset-2 hover:text-emerald-300 inline-flex items-center gap-0.5 transition-colors"
          >
            <span>{label}</span>
            <ExternalLink className="h-3 w-3 opacity-80 inline" />
          </a>
        );
      } else {
        elements.push(
          <Link
            key={`link-${matchStart}`}
            href={url}
            className="font-medium text-emerald-400 underline underline-offset-2 hover:text-emerald-300 transition-colors"
          >
            {label}
          </Link>
        );
      }
    }

    lastIdx = pattern.lastIndex;
  }

  if (lastIdx < text.length) {
    elements.push(text.slice(lastIdx));
  }

  return elements.length > 0 ? elements : [text];
}

type Block =
  | { type: "heading"; level: number; text: string }
  | { type: "code"; language: string; code: string }
  | { type: "list"; items: string[] }
  | { type: "ordered-list"; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "hr" }
  | { type: "paragraph"; text: string };

function parseMarkdownBlocks(rawMarkdown: string): Block[] {
  const lines = rawMarkdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) {
      i++;
      continue;
    }

    // Fenced Code Block
    if (trimmed.startsWith("```")) {
      const lang = trimmed.slice(3).trim();
      i++;
      const codeLines: string[] = [];
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length && lines[i].trim().startsWith("```")) {
        i++; // consume closing ```
      }
      blocks.push({
        type: "code",
        language: lang || "text",
        code: codeLines.join("\n"),
      });
      continue;
    }

    // Horizontal Rule
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      blocks.push({ type: "hr" });
      i++;
      continue;
    }

    // Headings: #, ##, ###, ####, #####, ######
    const headingMatch = trimmed.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      blocks.push({
        type: "heading",
        level: headingMatch[1].length,
        text: headingMatch[2],
      });
      i++;
      continue;
    }

    // Blockquote: >
    if (trimmed.startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({
        type: "blockquote",
        text: quoteLines.join(" "),
      });
      continue;
    }

    // Unordered List (- or * followed by space)
    if (/^[-*]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ""));
        i++;
      }
      blocks.push({
        type: "list",
        items,
      });
      continue;
    }

    // Ordered List (1. 2. etc.)
    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push({
        type: "ordered-list",
        items,
      });
      continue;
    }

    // Paragraph: collect lines until empty line or special block
    const pLines: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith("```") &&
      !lines[i].trim().startsWith("#") &&
      !lines[i].trim().startsWith(">") &&
      !/^[-*]\s+/.test(lines[i].trim()) &&
      !/^\d+\.\s+/.test(lines[i].trim()) &&
      !/^(-{3,}|\*{3,}|_{3,})$/.test(lines[i].trim())
    ) {
      pLines.push(lines[i]);
      i++;
    }
    blocks.push({
      type: "paragraph",
      text: pLines.join(" ").trim(),
    });
  }

  return blocks;
}

export function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  const blocks = useMemo(() => parseMarkdownBlocks(content || ""), [content]);

  return (
    <div className={`space-y-4 text-muted-foreground leading-relaxed ${className}`}>
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "heading": {
            if (block.level === 1) {
              return (
                <h1
                  key={idx}
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground pt-3 first:pt-0"
                >
                  {renderInline(block.text)}
                </h1>
              );
            }
            if (block.level === 2) {
              return (
                <h2
                  key={idx}
                  className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-3 border-b border-border/60 pb-2 first:pt-0"
                >
                  {renderInline(block.text)}
                </h2>
              );
            }
            if (block.level === 3) {
              return (
                <h3
                  key={idx}
                  className="text-lg sm:text-xl font-bold tracking-tight text-foreground pt-2 text-emerald-400 first:pt-0"
                >
                  {renderInline(block.text)}
                </h3>
              );
            }
            return (
              <h4
                key={idx}
                className="text-sm sm:text-base font-semibold uppercase tracking-wider text-foreground/90 pt-1 first:pt-0"
              >
                {renderInline(block.text)}
              </h4>
            );
          }

          case "code":
            return (
              <CodeBlock
                key={idx}
                code={block.code}
                language={block.language}
                filename={block.language !== "text" ? block.language : undefined}
              />
            );

          case "list":
            return (
              <ul key={idx} className="space-y-2.5 my-3 pl-1">
                {block.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400 mt-0.5 border border-emerald-500/20">
                      <ChevronRight className="h-3 w-3" />
                    </span>
                    <span className="flex-1 leading-relaxed text-foreground/90">
                      {renderInline(item)}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "ordered-list":
            return (
              <ol key={idx} className="space-y-2.5 my-3 pl-1">
                {block.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-surface-elevated font-mono text-[11px] font-bold text-emerald-400 border border-border mt-0.5">
                      {itemIdx + 1}
                    </span>
                    <span className="flex-1 leading-relaxed text-foreground/90">
                      {renderInline(item)}
                    </span>
                  </li>
                ))}
              </ol>
            );

          case "blockquote":
            return (
              <blockquote
                key={idx}
                className="my-3 rounded-r-xl border-l-4 border-emerald-500 bg-emerald-500/5 px-4 py-3 text-xs sm:text-sm text-foreground/90 italic"
              >
                {renderInline(block.text)}
              </blockquote>
            );

          case "hr":
            return <hr key={idx} className="my-6 border-border" />;

          case "paragraph":
          default:
            return (
              <p key={idx} className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {renderInline(block.text)}
              </p>
            );
        }
      })}
    </div>
  );
}

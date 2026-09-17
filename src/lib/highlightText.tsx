import type { ReactNode } from "react";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const STAT_PATTERN = "\\b\\d[\\d,]*(?:\\.\\d+)?(?:%|x|\\+)?\\b";

/**
 * Splits `text` into plain strings and styled spans: known `keywords` (tech
 * names, product names, etc.) are colored, and numeric/percentage figures
 * are underlined — so resume-style bullets read with the key terms and
 * metrics visually called out.
 */
export function highlightText(text: string, keywords: string[]): ReactNode[] {
  const uniqueKeywords = [...new Set(keywords.filter(Boolean))].sort((a, b) => b.length - a.length);
  const keywordRegex = uniqueKeywords.length
    ? new RegExp(`\\b(${uniqueKeywords.map(escapeRegExp).join("|")})\\b`, "gi")
    : null;

  const segments = keywordRegex ? text.split(keywordRegex) : [text];
  const nodes: ReactNode[] = [];
  let key = 0;

  for (const segment of segments) {
    if (!segment) continue;

    const isKeyword = uniqueKeywords.some((k) => k.toLowerCase() === segment.toLowerCase());
    if (isKeyword) {
      nodes.push(
        <span key={key++} className="text-blue-600 font-medium">
          {segment}
        </span>,
      );
      continue;
    }

    const statParts = segment.split(new RegExp(`(${STAT_PATTERN})`, "g"));
    statParts.forEach((part, i) => {
      if (!part) return;
      const isStat = i % 2 === 1;
      if (isStat) {
        nodes.push(
          <span key={key++} className="underline decoration-neutral-400 underline-offset-2 font-semibold text-neutral-900">
            {part}
          </span>,
        );
      } else {
        nodes.push(<span key={key++}>{part}</span>);
      }
    });
  }

  return nodes;
}

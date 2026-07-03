"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 rounded-md border border-border bg-background px-2 py-1 text-xs text-muted transition-colors hover:text-foreground"
      aria-label="Copy code"
    >
      {copied ? (
        <>
          <Check size={12} /> Copied
        </>
      ) : (
        <>
          <Copy size={12} /> Copy
        </>
      )}
    </button>
  );
}

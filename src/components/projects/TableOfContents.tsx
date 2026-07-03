"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function TableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // Collect all h2 and h3 headings
    const elements = Array.from(document.querySelectorAll("h2, h3"));
    const items = elements
      .filter((el) => {
        const style = window.getComputedStyle(el);
        return style.display !== "none" && el.textContent?.trim();
      })
      .map((el) => {
        // Create id from text
        const text = el.textContent!.trim();
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9一-鿿]+/g, "-")
          .replace(/^-|-$/g, "");
        el.id = id;
        return {
          id,
          text,
          level: el.tagName === "H2" ? 2 : 3,
        };
      });

    setHeadings(items);

    // Track scroll position to highlight active heading
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden xl:block fixed right-8 top-28 w-48">
      <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted/50">
        On this page
      </p>
      <ul className="space-y-1.5">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={cn(
                "block text-xs leading-relaxed transition-colors hover:text-foreground",
                heading.level === 3 ? "pl-3" : "",
                activeId === heading.id
                  ? "text-foreground font-medium"
                  : "text-muted/60"
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

export function TableOfContents() {
  const { locale } = useLanguage();
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState("");
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const allElements = Array.from(document.querySelectorAll("h2, h3"));
      const elements = allElements.filter((el) => {
        const style = window.getComputedStyle(el);
        return (
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          (el as HTMLElement).offsetParent !== null &&
          el.textContent?.trim()
        );
      });

      const items = elements.map((el, i) => {
        const text = el.textContent!.trim();
        const id = `toc-${i}-${text
          .toLowerCase()
          .replace(/[^a-z0-9一-鿿]+/g, "-")
          .replace(/^-|-$/g, "")}`;
        el.id = id;
        return { id, text, level: el.tagName === "H2" ? 2 : 3 };
      });

      setHeadings(items);

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
    }, 150);

    return () => clearTimeout(timer);
  }, [locale]);

  // Scroll-based opacity: fade in when past hero, fade out at top
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Start fading in after 400px, fully visible at 700px
      if (scrollY < 400) {
        setOpacity(0);
      } else if (scrollY < 700) {
        setOpacity((scrollY - 400) / 300);
      } else {
        setOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav
      className="hidden xl:flex fixed right-2 w-48 flex-col transition-opacity duration-300"
      style={{ top: "calc(50% - 200px)", opacity }}
    >
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={cn(
                "block transition-colors hover:text-foreground",
                heading.level === 2
                  ? "text-xs font-medium text-foreground/80"
                  : "pl-4 text-[11px] text-muted/50",
                activeId === heading.id && "text-foreground"
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

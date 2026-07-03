import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import { CopyButton } from "@/components/ui/CopyButton";

function Pre({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  const text =
    typeof children === "object" &&
    children !== null &&
    "props" in children &&
    typeof children.props === "object" &&
    children.props !== null &&
    "children" in children.props
      ? String(children.props.children)
      : "";

  return (
    <div className="group relative">
      <pre {...props}>{children}</pre>
      <div className="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100">
        <CopyButton text={text} />
      </div>
    </div>
  );
}

const components = {
  pre: Pre,
};

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert prose-headings:font-normal prose-headings:tracking-tight prose-p:text-muted prose-li:text-muted prose-strong:text-foreground prose-a:text-foreground prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  description?: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-normal tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-muted">{description}</p>
      )}
    </div>
  );
}

interface FieldNoteProps {
  children: React.ReactNode;
  title?: string;
}

export default function FieldNote({
  children,
  title = "Hearthian Field Note",
}: FieldNoteProps) {
  return (
    <div className="my-5 rounded-lg border-2 border-dashed border-accent-purple/50 bg-accent-purple/5 p-4">
      <p className="text-accent-purple font-heading font-bold text-sm mb-2">
        {title}
      </p>
      <div className="text-text-primary text-sm leading-relaxed">{children}</div>
    </div>
  );
}

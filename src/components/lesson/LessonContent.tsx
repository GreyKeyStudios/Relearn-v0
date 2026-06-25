interface LessonContentProps {
  title: string;
  content: string;
}

export function LessonContent({ title, content }: LessonContentProps) {
  const paragraphs = content.split("\n\n").filter(Boolean);

  return (
    <article className="prose prose-invert max-w-none">
      <h2 className="mb-4 text-lg font-semibold text-zinc-100">{title}</h2>
      <div className="flex flex-col gap-4 text-base leading-relaxed text-zinc-300">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}

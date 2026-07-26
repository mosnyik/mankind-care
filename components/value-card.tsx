import { questionIconMap } from "@/components/icons";
import type { topQuestions } from "@/lib/site";

export default function ValueCard({
  item,
}: {
  item: (typeof topQuestions)[number];
}) {
  const Icon = questionIconMap[item.icon];

  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-line bg-white p-8 transition-shadow duration-300 hover:shadow-[0_24px_60px_-28px_rgba(18,41,79,0.25)]">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky text-navy">
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="font-serif-display text-xl text-ink">{item.question}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{item.answer}</p>
    </div>
  );
}

import { questionIconMap } from "@/components/icons";
import { commitments } from "@/lib/site";

export default function CommitmentsGrid() {
  return (
    <div className="grid gap-10 sm:grid-cols-3">
      {commitments.map((item) => {
        const Icon = questionIconMap[item.icon];
        return (
          <div
            key={item.title}
            className="flex flex-col items-center gap-4 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-[0_16px_40px_-20px_rgba(26,67,191,0.3)]">
              <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
            </span>
            <h3 className="font-serif-display text-lg text-primary-dark">
              {item.title}
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-slate-600">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

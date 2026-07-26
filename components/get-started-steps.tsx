import SectionHeading from "@/components/section-heading";
import { getStartedSteps } from "@/lib/site";

export default function GetStartedSteps() {
  return (
    <div className="flex flex-col gap-12">
      <SectionHeading
        eyebrow="How It Works"
        title="Getting started is simple."
        align="center"
        className="mx-auto"
      />
      <div className="grid gap-8 sm:grid-cols-3">
        {getStartedSteps.map((step, index) => (
          <div key={step.title} className="flex flex-col items-center gap-3 text-center">
            <span className="font-serif-display flex h-12 w-12 items-center justify-center rounded-full bg-navy text-lg text-white">
              {index + 1}
            </span>
            <h3 className="font-serif-display text-lg text-ink">{step.title}</h3>
            <p className="max-w-xs text-sm leading-relaxed text-slate-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

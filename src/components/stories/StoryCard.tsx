import { Link } from "react-router-dom";
import { Quote, ArrowRight, Clock } from "lucide-react";
import type { Story } from "@/data/stories";
import { formatStoryDate } from "@/data/stories";

type StoryCardProps = {
  story: Story;
  variant?: "default" | "compact";
};

export function StoryCard({ story, variant = "default" }: StoryCardProps) {
  const isCompact = variant === "compact";

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-background shadow-sm ring-1 ring-border/30 transition hover:-translate-y-1 hover:shadow-xl hover:ring-primary/15 ${
        isCompact ? "" : ""
      }`}
    >
      <Link to={`/stories/${story.slug}`} className="relative block shrink-0 overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className={`w-full object-cover transition duration-500 group-hover:scale-[1.04] motion-reduce:transition-none ${
            isCompact ? "h-48" : "h-72"
          }`}
          loading="lazy"
          width={800}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-80 transition group-hover:opacity-100" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
            {story.program}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white md:hidden">
          <p className="text-xs font-medium text-white/90">{formatStoryDate(story.date)}</p>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="mb-2 hidden items-center gap-2 text-xs text-muted-foreground md:flex">
          <time dateTime={story.date}>{formatStoryDate(story.date)}</time>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            {story.readTimeMinutes} min read
          </span>
        </div>
        <h3 className="font-heading text-lg font-bold leading-snug text-foreground md:text-xl">
          <Link
            to={`/stories/${story.slug}`}
            className="transition hover:text-primary hover:underline hover:decoration-primary/40 hover:underline-offset-4"
          >
            {story.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{story.excerpt}</p>
        <Quote className="mt-4 h-7 w-7 text-secondary/35" aria-hidden />
        <p className="mt-2 text-sm italic leading-relaxed text-muted-foreground line-clamp-4">
          &ldquo;{story.quote}&rdquo;
        </p>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-3 border-t border-border/60 pt-6">
          <div>
            <p className="font-heading font-semibold text-foreground">{story.name}</p>
            <p className="text-sm text-muted-foreground">{story.location}</p>
          </div>
          <Link
            to={`/stories/${story.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition hover:gap-2"
          >
            Read story
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}

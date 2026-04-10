import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  CircleDot,
  ChevronDown,
  Search,
  SlidersHorizontal,
  BookOpen,
  Users,
  GraduationCap,
  Droplets,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StoryCard } from "@/components/stories/StoryCard";
import {
  STORIES,
  PROGRAM_FILTERS,
  formatStoryDate,
  type Story,
  type StoryProgram,
} from "@/data/stories";
import storiesHero from "@/assets/story-2.jpg";

const stats = [
  { icon: Users, number: "100+", label: "Youth trained", description: "Skills and leadership" },
  { icon: GraduationCap, number: "30+", label: "Schools reached", description: "Education & programs" },
  { icon: Droplets, number: "5,000+", label: "Lives touched", description: "Kakuma & Turkana West" },
];

const INITIAL_VISIBLE = 6;
const LOAD_STEP = 6;

type SortKey = "newest" | "oldest" | "title";

function sortStories(list: Story[], sort: SortKey): Story[] {
  const copy = [...list];
  if (sort === "newest") {
    copy.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else if (sort === "oldest") {
    copy.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  } else {
    copy.sort((a, b) => a.title.localeCompare(b.title));
  }
  return copy;
}

function matchesSearch(story: Story, q: string): boolean {
  if (!q.trim()) return true;
  const s = q.toLowerCase();
  return (
    story.title.toLowerCase().includes(s) ||
    story.name.toLowerCase().includes(s) ||
    story.location.toLowerCase().includes(s) ||
    story.excerpt.toLowerCase().includes(s) ||
    story.quote.toLowerCase().includes(s) ||
    story.tags.some((t) => t.toLowerCase().includes(s))
  );
}

const Stories = () => {
  const [program, setProgram] = useState<StoryProgram | "All">("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortKey>("newest");
  const [visible, setVisible] = useState(INITIAL_VISIBLE);

  const featured = useMemo(() => {
    const f = STORIES.find((s) => s.featured);
    return f ?? [...STORIES].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  }, []);

  const filtered = useMemo(() => {
    const base = STORIES.filter((st) => {
      if (program !== "All" && st.program !== program) return false;
      return matchesSearch(st, search);
    });
    return sortStories(base, sort);
  }, [program, search, sort]);

  const showSpotlight = program === "All" && !search.trim();

  /** When the spotlight is shown, omit it from the grid to avoid duplicates */
  const gridStories = useMemo(() => {
    if (!showSpotlight) return filtered;
    return filtered.filter((s) => s.slug !== featured.slug);
  }, [filtered, featured.slug, showSpotlight]);

  const timeline = useMemo(() => {
    const map = new Map<number, number>();
    STORIES.forEach((st) => {
      const y = new Date(st.date).getFullYear();
      map.set(y, (map.get(y) ?? 0) + 1);
    });
    return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
  }, []);

  const visibleStories = gridStories.slice(0, visible);
  const hasMore = visible < gridStories.length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[min(58vh,600px)] overflow-hidden border-b border-border/80">
          <img
            src={storiesHero}
            alt=""
            className="absolute inset-0 h-full w-full scale-105 object-cover object-center animate-ken-burns motion-reduce:animate-none motion-reduce:scale-100"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 gradient-overlay-strong" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-foreground/20 to-primary/10"
            aria-hidden
          />
          <div className="relative z-10 mx-auto flex min-h-[min(58vh,600px)] max-w-6xl flex-col justify-end px-6 pb-12 pt-24 md:justify-center md:pb-16 md:pt-28 lg:px-8">
            <div className="animate-fade-in motion-reduce:animate-none">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                <CircleDot className="h-3.5 w-3.5 text-white" strokeWidth={2.5} aria-hidden />
                Impact stories
              </div>
              <h1 className="max-w-4xl text-balance font-heading text-[2.35rem] font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
                Voices of impact
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white md:text-xl">
                Behind every statistic is a human story from communities in Kakuma and Turkana West
                County.
              </p>
            </div>
            <a
              href="#stories-content"
              className="mt-10 inline-flex items-center gap-2 self-start text-sm font-medium text-white transition hover:text-white/90 md:mt-12"
            >
              <span>Browse stories</span>
              <ChevronDown className="h-5 w-5 motion-safe:animate-float" aria-hidden />
            </a>
          </div>
        </section>

        {/* Intro */}
        <section className="border-b border-border/60 bg-card/40 px-6 py-10 md:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-secondary">
              Impact stories
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Voices of <span className="italic text-primary">Impact</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Behind every statistic is a human story. Meet some of the people whose lives intersect
              with our programs—and learn what changed, and what stayed hard.
            </p>
          </div>
        </section>

        {/* Impact stats */}
        <section className="border-b border-border/60 bg-muted/25 px-6 py-12 md:py-14">
          <div className="mx-auto max-w-6xl">
            <p className="text-center font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/80">
              By the numbers
            </p>
            <h2 className="mt-2 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
              Impact at a glance
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
              Figures are incomplete without names and context—use them alongside the stories below.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border/80 bg-background p-6 text-center shadow-sm"
                >
                  <s.icon className="mx-auto mb-3 h-8 w-8 text-primary" strokeWidth={1.5} aria-hidden />
                  <p className="font-heading text-3xl font-bold text-foreground">{s.number}</p>
                  <p className="mt-1 text-sm font-semibold text-secondary">{s.label}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="border-b border-border/60 bg-background px-6 py-8">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 md:gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Stories by year
            </span>
            {timeline.map(([year, count]) => (
              <span
                key={year}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
              >
                {year}{" "}
                <span className="text-muted-foreground">
                  ({count} {count === 1 ? "story" : "stories"})
                </span>
              </span>
            ))}
          </div>
        </section>

        <div id="stories-content" className="scroll-mt-24">
          {/* Featured */}
          {featured && showSpotlight ? (
            <section className="border-b border-border/60 bg-gradient-to-b from-primary/[0.04] to-background px-6 py-14 md:py-16">
              <div className="mx-auto max-w-6xl">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                  Featured
                </p>
                <h2 className="mt-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Story spotlight
                </h2>
                <div className="mt-8 overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xl ring-1 ring-border/40">
                  <div className="grid lg:grid-cols-2">
                    <Link to={`/stories/${featured.slug}`} className="relative block min-h-[280px] lg:min-h-[360px]">
                      <img
                        src={featured.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover transition hover:scale-[1.02] motion-reduce:transition-none"
                        width={1200}
                        height={800}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-card/95" />
                    </Link>
                    <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                      <span className="w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        {featured.program}
                      </span>
                      <h3 className="mt-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
                        <Link
                          to={`/stories/${featured.slug}`}
                          className="transition hover:text-primary hover:underline hover:decoration-primary/40"
                        >
                          {featured.title}
                        </Link>
                      </h3>
                      <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
                      <p className="mt-4 text-sm text-muted-foreground">
                        <time dateTime={featured.date}>{formatStoryDate(featured.date)}</time>
                        {" · "}
                        {featured.readTimeMinutes} min read
                      </p>
                      <p className="mt-6 font-heading font-semibold text-foreground">{featured.name}</p>
                      <p className="text-sm text-muted-foreground">{featured.location}</p>
                      <Button asChild className="mt-8 w-fit shadow-md">
                        <Link to={`/stories/${featured.slug}`} className="gap-2">
                          <BookOpen className="h-4 w-4" aria-hidden />
                          Read full story
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          {/* Filters + grid */}
          <section className="px-6 py-14 md:py-16 lg:px-10">
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                    All stories
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Filter by program, search by name or keyword, or change sort order.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <div className="relative min-w-[200px] flex-1 sm:max-w-xs">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search stories…"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                        setVisible(INITIAL_VISIBLE);
                      }}
                      className="pl-9"
                      aria-label="Search stories"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4 text-muted-foreground" aria-hidden />
                    <label htmlFor="story-sort" className="sr-only">
                      Sort stories
                    </label>
                    <select
                      id="story-sort"
                      value={sort}
                      onChange={(e) => {
                        setSort(e.target.value as SortKey);
                        setVisible(INITIAL_VISIBLE);
                      }}
                      className="h-10 rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="newest">Newest first</option>
                      <option value="oldest">Oldest first</option>
                      <option value="title">Title A–Z</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter by program">
                {PROGRAM_FILTERS.map((p) => {
                  const active = program === p;
                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() => {
                        setProgram(p);
                        setVisible(INITIAL_VISIBLE);
                      }}
                      className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                        active
                          ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                          : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>

              {filtered.length === 0 ? (
                <div className="mt-12 rounded-2xl border border-dashed border-border bg-muted/20 px-6 py-16 text-center">
                  <p className="font-heading text-lg font-semibold text-foreground">No stories match</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Try a different keyword or clear the program filter.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-6"
                    onClick={() => {
                      setProgram("All");
                      setSearch("");
                      setVisible(INITIAL_VISIBLE);
                    }}
                  >
                    Reset filters
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {visibleStories.map((story) => (
                      <StoryCard key={story.slug} story={story} />
                    ))}
                  </div>
                  {hasMore ? (
                    <div className="mt-12 flex justify-center">
                      <Button
                        type="button"
                        variant="secondary"
                        size="lg"
                        onClick={() => setVisible((v) => v + LOAD_STEP)}
                      >
                        Load more ({filtered.length - visible} remaining)
                      </Button>
                    </div>
                  ) : null}
                </>
              )}
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="border-t border-border bg-muted/30 px-6 py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground md:text-2xl">
                Join the movement
              </h2>
              <p className="mt-2 text-muted-foreground">
                Volunteer, donate, or explore how programs connect on the ground.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contact">Get involved</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/programs">View programs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Stories;

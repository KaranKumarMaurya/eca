import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Share2,
  Link2,
  Facebook,
  Twitter,
  Quote,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { StoryCard } from "@/components/stories/StoryCard";
import { getStoryBySlug, getRelatedStories, formatStoryDate } from "@/data/stories";
import NotFound from "@/pages/NotFound";

const StoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = getStoryBySlug(slug);
  const related = story ? getRelatedStories(story.slug, 3) : [];

  useEffect(() => {
    if (story) {
      document.title = `${story.title} | ECA Stories`;
    }
    return () => {
      document.title = "Education and Climate Advocacy";
    };
  }, [story]);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      /* ignore */
    }
  };

  const handleShare = async () => {
    if (navigator.share && story) {
      try {
        await navigator.share({
          title: story.title,
          text: story.excerpt,
          url: shareUrl,
        });
      } catch {
        /* dismissed */
      }
    } else {
      handleCopy();
    }
  };

  if (!story) {
    return <NotFound />;
  }

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(story.title);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <article>
          <header className="relative border-b border-border/70 bg-muted/30">
            <div className="relative overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="h-[min(52vh,520px)] w-full object-cover"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="relative mx-auto max-w-3xl px-6 pb-12 pt-4 md:-mt-24 md:pb-16 md:pt-0">
              <Link
                to="/stories"
                className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition hover:underline md:text-white md:hover:text-white/90"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                All stories
              </Link>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground md:text-white/90">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                  {story.program}
                </span>
                <time dateTime={story.date}>{formatStoryDate(story.date)}</time>
                <span aria-hidden>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4" aria-hidden />
                  {story.readTimeMinutes} min read
                </span>
              </div>
              <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl md:text-white lg:text-[2.75rem]">
                {story.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-white/95">{story.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border/60 pt-6">
                <div>
                  <p className="font-heading text-lg font-semibold text-foreground">{story.name}</p>
                  <p className="text-sm text-muted-foreground">{story.location}</p>
                  {story.role ? (
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                  ) : null}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <Button type="button" variant="outline" size="sm" className="gap-2" onClick={handleShare}>
                  <Share2 className="h-4 w-4" aria-hidden />
                  {typeof navigator !== "undefined" && navigator.share ? "Share" : "Share / copy link"}
                </Button>
                <Button type="button" variant="outline" size="sm" className="gap-2" onClick={handleCopy}>
                  <Link2 className="h-4 w-4" aria-hidden />
                  Copy link
                </Button>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-3 text-sm font-medium transition hover:bg-muted"
                >
                  <Twitter className="h-4 w-4" aria-hidden />
                  Post
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-3 text-sm font-medium transition hover:bg-muted"
                >
                  <Facebook className="h-4 w-4" aria-hidden />
                  Facebook
                </a>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
            <blockquote className="relative rounded-2xl border border-secondary/30 bg-gradient-to-br from-secondary/10 to-transparent p-6 md:p-8">
              <Quote className="absolute right-6 top-6 h-10 w-10 text-secondary/25" aria-hidden />
              <p className="relative font-heading text-lg italic leading-relaxed text-foreground md:text-xl">
                &ldquo;{story.quote}&rdquo;
              </p>
            </blockquote>

            <div className="mt-12 max-w-none">
              {story.body.map((para, i) => (
                <p key={`${story.slug}-${i}`} className="mb-6 text-[1.02rem] leading-[1.85] text-muted-foreground">
                  {para}
                </p>
              ))}
            </div>

            {story.tags.length > 0 ? (
              <div className="mt-10 border-t border-border pt-8">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tags</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-muted/25 px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </article>

        {related.length > 0 ? (
          <section className="border-t border-border bg-muted/30 px-6 py-14 md:py-16">
            <div className="mx-auto max-w-6xl">
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Related stories
              </h2>
              <p className="mt-2 text-muted-foreground">
                More voices from similar programs and places.
              </p>
              <div className="mt-10 grid gap-8 md:grid-cols-3">
                {related.map((s) => (
                  <StoryCard key={s.slug} story={s} variant="compact" />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="border-t border-border bg-primary px-6 py-12 text-primary-foreground">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-heading text-xl font-bold md:text-2xl">Want to support this work?</h2>
              <p className="mt-2 text-primary-foreground/85">
                Donate, volunteer, or start a conversation with our team.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link to="/contact">Contact us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/programs">Our programs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StoryDetail;

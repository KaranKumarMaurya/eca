import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import educationImg from "@/assets/education-program.jpg";
import waterImg from "@/assets/water-program.jpg";
import missionImg from "@/assets/mission.jpg";
import getInvolvedImg from "@/assets/get-involved.jpg";
import climateImg from "@/assets/about-climate.jpg";

export type StoryProgram = "Education" | "Community Support" | "Livelihoods" | "Climate Action";

export interface Story {
  slug: string;
  title: string;
  name: string;
  role?: string;
  location: string;
  program: StoryProgram;
  tags: string[];
  date: string;
  readTimeMinutes: number;
  excerpt: string;
  quote: string;
  image: string;
  body: string[];
  featured?: boolean;
}

export const PROGRAM_FILTERS: (StoryProgram | "All")[] = [
  "All",
  "Education",
  "Climate Action",
  "Livelihoods",
  "Community Support",
];

export const STORIES: Story[] = [
  {
    slug: "amina-school-ready",
    title: "When the classroom feels safe again",
    name: "Amina Hassan",
    location: "Kakuma",
    program: "Education",
    tags: ["children", "school readiness", "protection"],
    date: "2025-02-14",
    readTimeMinutes: 4,
    excerpt:
      "How trauma-informed routines helped her children return to class—and stay—with confidence.",
    quote:
      "ECA's education program transformed my children's lives. They now have access to quality learning in a safe and supportive environment.",
    image: story1,
    featured: true,
    body: [
      "When Amina's family moved within the camp catchment, school felt uncertain. Loud spaces and sudden schedule changes had made her youngest reluctant to enter a classroom.",
      "Through ECA's education team, teachers and community facilitators introduced predictable routines, quiet corners, and caregiver conversations—not as a one-off workshop, but as a practice repeated week after week.",
      "Today her children attend regularly. \"They ask about homework,\" she says. \"That is new for us.\"",
      "The work continues: protection-focused readiness, peer learning for caregivers, and coordination with schools so no child falls through the cracks between camp and county systems.",
    ],
  },
  {
    slug: "sarah-volunteer-kakuma",
    title: "Six weeks that rewired how I listen",
    name: "Sarah Mitchell",
    role: "Volunteer",
    location: "International volunteer",
    program: "Community Support",
    tags: ["volunteer", "coordination", "listening"],
    date: "2024-11-03",
    readTimeMinutes: 5,
    excerpt:
      "Volunteering with ECA meant showing up consistently—and learning when to step back.",
    quote:
      "The team was welcoming, organized, and passionate about their mission. They truly value their volunteers and I felt empowered to contribute my skills.",
    image: story2,
    body: [
      "Sarah arrived with skills in facilitation and a willingness to adapt. What she did not expect was how much time would be spent aligning with community priorities already in motion.",
      "ECA's approach paired her with local facilitators who owned the agenda. Meetings started on community time. Feedback loops were short and direct.",
      "\"I learned to treat my role as support, not direction,\" she reflects. \"That changed the quality of everything we did together.\"",
    ],
  },
  {
    slug: "turkana-west-livelihoods",
    title: "Income that survives the dry months",
    name: "Community voices",
    location: "Turkana West County",
    program: "Livelihoods",
    tags: ["agriculture", "poultry", "women", "youth"],
    date: "2025-01-22",
    readTimeMinutes: 6,
    excerpt:
      "Producer groups are testing climate-smart practices and poultry cycles with an eye on cash flow, not just yields.",
    quote:
      "Through ECA's climate and livelihood initiatives, families are building resilience and restoring dignity. Youth and women are gaining practical skills that strengthen both income and food security.",
    image: story3,
    body: [
      "In Turkana West, rainfall sets the rhythm. Livelihoods work has to survive dry spells—not only look good in a report.",
      "ECA supports youth- and women-led groups with training, inputs where appropriate, and follow-up visits that adjust when shocks hit.",
      "Participants describe smaller but steadier wins: better feed practices, collective marketing conversations, and confidence to negotiate fair prices.",
    ],
  },
  {
    slug: "water-harvesting-youth",
    title: "Youth clubs take climate from slides to soil",
    name: "Youth climate club",
    location: "Kakuma",
    program: "Climate Action",
    tags: ["water", "youth", "advocacy"],
    date: "2024-09-18",
    readTimeMinutes: 5,
    excerpt:
      "Local action on water harvesting and tree care—documented with dates and places for accountability.",
    quote:
      "We stopped treating climate like a distant topic. We measure what we plant and what we save, and we show neighbors the numbers.",
    image: waterImg,
    body: [
      "The club started with awareness—then quickly moved to practical trials: small-scale water harvesting, protecting seedlings, and simple record-keeping.",
      "Members present updates in community forums using plain language. When county conversations happen, they arrive with observations, not slogans.",
      "The goal is not hero stories; it is repeatable habits that survive leadership turnover.",
    ],
  },
  {
    slug: "teacher-peer-circle",
    title: "Teachers learning from teachers",
    name: "Peer learning circle",
    location: "Kakuma",
    program: "Education",
    tags: ["teachers", "peer learning", "trauma-informed"],
    date: "2024-07-08",
    readTimeMinutes: 4,
    excerpt:
      "Facilitators meet regularly to swap what works in crowded classrooms and under stress.",
    quote:
      "We share one concrete tactic each session—something we can try the next morning.",
    image: educationImg,
    body: [
      "Large class sizes and mixed-age groups make generic training insufficient. ECA invests in peer circles where educators bring real cases—not only theory.",
      "Sessions are short, grounded, and documented so absent colleagues can catch up.",
      "Over time, the circle became a professional home: less performance, more honesty about failure and retry.",
    ],
  },
  {
    slug: "women-poultry-cooperative",
    title: "A cooperative ledger everyone can read",
    name: "Women's poultry group",
    location: "Turkana West County",
    program: "Livelihoods",
    tags: ["poultry", "cooperative", "governance"],
    date: "2024-12-01",
    readTimeMinutes: 5,
    excerpt:
      "Clear roles and a shared ledger helped the group grow without collapsing into disputes.",
    quote:
      "When the numbers are visible, trust grows. We still argue—but we fix it in the meeting, not behind backs.",
    image: missionImg,
    body: [
      "The group formalized simple governance: who feeds, who sells, who banks savings, and how disputes get mediated.",
      "ECA provided early technical support; the members carried the rules forward.",
      "New members receive onboarding from peers, not only from staff—scaling trust alongside production.",
    ],
  },
  {
    slug: "seedlings-and-soil",
    title: "Seedlings counted, soil named",
    name: "Restoration volunteers",
    location: "Kakuma",
    program: "Climate Action",
    tags: ["trees", "restoration", "community"],
    date: "2025-03-05",
    readTimeMinutes: 4,
    excerpt:
      "Restoration drives paired with honest expectations about survival rates and grazing pressure.",
    quote:
      "We plant where communities agree to protect—not where a photo looks best.",
    image: climateImg,
    body: [
      "Tree planting without agreements on firewood and grazing rarely lasts. ECA emphasizes neighbor conversations before shovels.",
      "Volunteers track seedlings and revisit sites. Losses are recorded too; honesty protects credibility.",
      "The story is slower than a headline—and more durable.",
    ],
  },
  {
    slug: "partners-week-get-involved",
    title: "When partners show up—and stay curious",
    name: "Partner visit reflections",
    location: "Kakuma",
    program: "Community Support",
    tags: ["partnerships", "transparency", "field visit"],
    date: "2024-05-20",
    readTimeMinutes: 3,
    excerpt:
      "A field visit worked because questions came before logos, and follow-up matched promises.",
    quote:
      "The best partners asked what we already tried—and what failed—before offering anything new.",
    image: getInvolvedImg,
    body: [
      "External visits can extract time from communities already under pressure. ECA tries to batch conversations and share readouts quickly.",
      "Partners who return—and adjust based on feedback—earn trust faster than one-time grants alone.",
    ],
  },
];

export function getStoryBySlug(slug: string | undefined): Story | undefined {
  if (!slug) return undefined;
  return STORIES.find((s) => s.slug === slug);
}

export function getRelatedStories(currentSlug: string, limit = 3): Story[] {
  const current = getStoryBySlug(currentSlug);
  if (!current) return STORIES.slice(0, limit);

  const sameProgram = STORIES.filter(
    (s) => s.slug !== currentSlug && s.program === current.program
  );
  const rest = STORIES.filter((s) => s.slug !== currentSlug && s.program !== current.program);
  return [...sameProgram, ...rest].slice(0, limit);
}

export function formatStoryDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

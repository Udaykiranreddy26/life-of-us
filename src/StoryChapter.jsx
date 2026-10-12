import { useState } from "react";
import { ArrowLeft, ArrowRight, Heart, Sparkles } from "lucide-react";
import firstMeetingImage from "./assets/Shy Springtime Campus Romance-1.png";
import festivalImage from "./assets/Golden Hour Festival Romance-2.png";
import freshersDayImage from "./assets/Golden Courtyard Romance-4.png";
import caringMomentImage from "./assets/Cherry Blossom Bento Romance-3.png";
import "./StoryChapter.css";

const years = [
  {
    year: "Year One",
    title: "The Day Our Story Began",
    text: "Two college classmates, a little shyness, and a hello that would become the beginning of so much more. We didn't know then how important we would become to each other.",
    symbol: "🌱",
  },
  {
    year: "Year Two",
    title: "From Familiar Faces to Favourite Person",
    text: "Little conversations and unexpected meetups made us feel closer. Slowly, you became someone I looked forward to seeing, even on an ordinary day.",
    symbol: "☁️",
  },
  {
    year: "Year Three",
    title: "Memories Worth Keeping",
    text: "Freshers Day gave us a photograph to look back on—a small moment from college that now feels like a little piece of our story kept safe in time.",
    symbol: "📸",
  },
  {
    year: "Year Four",
    title: "The Little Things That Mean Everything",
    text: "Your care showed up in the smallest ways: sharing food, feeding me with your hands, and making me feel looked after without needing grand words.",
    symbol: "🍱",
  },
  {
    year: "Year Five",
    title: "The Smile I Still Remember",
    text: "At your house-opening ceremony, you asked me to wait so you could show me your half saree. When I saw you, you looked so beautiful that words disappeared—and your smile stayed with me.",
    symbol: "🌸",
  },
  {
    year: "Year Six",
    title: "You Stayed When Life Felt Uncertain",
    text: "When I worried about my future and whether I would find my place in life, you promised you would be there. You didn't just say it—you stayed, and your belief helped me keep going.",
    symbol: "🤍",
  },
  {
    year: "Year Seven",
    title: "Still Choosing You",
    text: "My career began, distance became part of our story, and we learned to miss each other. Yet every time I saw you again, my heart felt new—and I fell in love all over again. Now I dream of the next chapter, together.",
    symbol: "🌅",
  },
];

const chapters = {
  2: {
    number: "02",
    title: "Where It All Began",
    subtitle: "Two classmates. One unexpected story.",
    pages: [
      {
        eyebrow: "THE FIRST CHAPTER",
        title: "How We Met",
        image: firstMeetingImage,
        alt: "University campus on a bright day",
        paragraphs: [
          "It began in college, when we were simply two classmates living our own little lives.",
          "We were both shy about talking to each other. Maybe we had things to say, but neither of us knew how to begin.",
          "If our college selves could see us now, I think they would smile at how a quiet beginning became such a big part of our lives.",
        ],
        quote:
          "Every beautiful story has a beginning. Ours started with a little shyness.",
      },
      {
        eyebrow: "LITTLE BY LITTLE",
        title: "A Familiar Face Became My Favourite",
        image: festivalImage,
        alt: "Friends spending a happy moment together",
        paragraphs: [
          "The little conversations and unexpected moments slowly made us more comfortable around each other.",
          "Without a grand announcement, friendship became care, and ordinary college days began collecting extraordinary memories.",
          "We didn't know exactly when something changed. We just kept becoming a little more important to each other.",
        ],
        quote:
          "Sometimes love doesn't arrive all at once. Sometimes it grows quietly, one little moment at a time.",
      },
    ],
  },

  3: {
    number: "03",
    title: "The Little Things I Keep",
    subtitle: "Some memories never lose their colour.",
    pages: [
      {
        eyebrow: "A MOMENT IN A PHOTO",
        title: "Freshers Day 📸",
        image: freshersDayImage,
        alt: "Friends celebrating together",
        paragraphs: [
          "Remember our Freshers Day photograph? Back then, it may have felt like one small moment among so many college memories.",
          "Now it feels like a tiny time capsule—a reminder of who we were and of all the moments we still had ahead of us.",
          "I love that we have little pieces of our beginning to look back on.",
        ],
        quote: "One photograph. A thousand feelings that came later.",
      },
      {
        eyebrow: "CARE IN THE SMALLEST FORM",
        title: "Your Care, Your Smile",
        image: caringMomentImage,
        alt: "A warm, joyful moment shared by loved ones",
        paragraphs: [
          "I still treasure the way you fed me lunch with your hands. It was such a simple thing, but it made me feel cared for in a way I won't forget.",
          "And then there was your house-opening ceremony. You asked me to wait so you could show me your half saree.",
          "When I finally saw you, I was speechless. You looked beautiful—and that smile of yours made the moment unforgettable.",
        ],
        quote:
          "It wasn't only how beautiful you looked. It was how that moment made me feel.",
      },
    ],
  },

  4: {
    number: "04",
    title: "Through Everything",
    subtitle: "The promise that helped me keep going.",
    pages: [
      {
        eyebrow: "WHEN LIFE FELT UNCERTAIN",
        title: "You Believed in Me",
        image:
          "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85",
        alt: "Sunrise breaking through a quiet landscape",
        paragraphs: [
          "As college was ending, I went through a difficult time. I worried about whether I would settle in life and whether my efforts would lead somewhere.",
          "When I was losing hope, you told me that whatever happened, you would be there for me.",
          "You kept that promise. Your presence didn't magically solve everything, but it reminded me that I wasn't facing life alone.",
        ],
        quote:
          "When I struggled to believe in myself, you helped me find hope again.",
      },
      {
        eyebrow: "LOVE ACROSS THE DISTANCE",
        title: "Every Reunion Feels New",
        image:
          "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=85",
        alt: "A couple holding hands in a tender moment",
        paragraphs: [
          "Then I started my career, and distance became part of our story. We couldn't always meet whenever we wanted, and we learned what it meant to miss each other.",
          "But every time I saw you again, something in me felt new. Your smile, your presence, and the feeling of being beside you made me fall in love all over again.",
          "Distance became one part of our journey—not the definition of our love.",
        ],
        quote:
          "No matter how much distance there was, my heart kept recognising home in you.",
      },
    ],
  },
};

export default function StoryChapter({ chapter, onBack, onNext }) {
  const [page, setPage] = useState(0);
  const [showReveal, setShowReveal] = useState(false);
  const [opened, setOpened] = useState(false);

  const data = chapters[chapter];
  const isFinal = chapter === 5;

  function back() {
    if (showReveal) {
      setShowReveal(false);
      setOpened(false);
      return;
    }

    if (page === 0) {
      onBack?.();
    } else {
      setPage(page - 1);
    }
  }

  function next() {
    if (page === 0) {
      setPage(1);
    } else if (isFinal && !showReveal) {
      setShowReveal(true);
    } else if (isFinal && showReveal && !opened) {
      setOpened(true);
    } else {
      onNext?.();
    }
  }

  if (isFinal && showReveal && opened) {
    return (
      <main className="story-page">
        <section className="story-card reveal-card">
          <p className="story-brand">LIFE OF US · OUR FOREVER</p>

          <div className="story-art story-sun">☀️</div>

          <p className="story-eyebrow">THE MEANING OF US</p>

          <h1>
            Uday <span>❤️</span> Sri
          </h1>

          <p className="story-subtitle">
            One sunrise. One blessing. Seven years of love.
          </p>

          <div className="story-letter">
            <p>
              One name carries the feeling of rising light and a new beginning.
              The other carries grace, goodness, and a blessing that makes the
              journey more beautiful.
            </p>

            <p>
              From two college classmates to seven years of memories, through
              uncertain days and distance, my favourite part has always been
              that we have had each other.
            </p>

            <p>
              I dream of the day we take the next step, build our own home, and
              begin the rest of our lives together. I cannot promise every day
              will be easy, but I promise to keep choosing you, caring for you,
              and growing with you.
            </p>
          </div>

          <p className="story-forever">
            Two names. One love. A lifetime still ahead.
            <br />
            <strong>
              Our story isn't over. It's the beginning of our forever. ♡
            </strong>
          </p>

          <button
            className="story-primary"
            onClick={() => window.location.reload()}
          >
            Read Our Story Again ↺
          </button>
        </section>
      </main>
    );
  }

  if (isFinal && showReveal) {
    return (
      <main className="story-page">
        <section className="story-card reveal-card">
          <p className="story-brand">LIFE OF US</p>

          <div className="story-art story-envelope">💌</div>

          <p className="story-eyebrow">ONE LAST LITTLE SECRET</p>

          <h1>Our Story Has Two Names</h1>

          <p className="story-subtitle">
            You've followed seven little chapters of time. Now open the secret
            that has been part of this story all along.
          </p>

          <button
            className="story-primary"
            onClick={() => setOpened(true)}
          >
            Open Our Little Secret ❤️
          </button>

          <button className="story-secondary" onClick={back}>
            ← Read the timeline again
          </button>
        </section>
      </main>
    );
  }

  const pageData = isFinal ? null : data.pages[page];

  return (
    <main className="story-page">
      <section className="story-card">
        <div className="story-topline">
          <span>♡ LIFE OF US</span>
          <span>CHAPTER {isFinal ? "05" : data.number}</span>
        </div>

        <p className="story-page-count">
          {isFinal ? "SEVEN YEARS, SEVEN LITTLE CHAPTERS" : `PAGE ${page + 1} OF 2`}
        </p>

        {isFinal ? (
          page === 0 ? (
            <>
              <p className="story-eyebrow">A LITTLE TIMELINE OF US</p>

              <h1 className="story-heading">Seven Years, Still You</h1>

              <p className="story-subtitle">
                Not just years passing—seven seasons of growing closer,
                learning, caring, and choosing each other.
              </p>

              <div className="year-timeline">
                {years.map((item) => (
                  <article className="year-item" key={item.year}>
                    <div className="year-marker">{item.symbol}</div>

                    <div className="year-copy">
                      <span>{item.year}</span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              <p className="story-quote">
                “Seven years later, and my favourite part of the story is still
                you.”
              </p>
            </>
          ) : (
            <>
              <div className="story-photo-wrap">
                <img
                  className="story-photo"
                  src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=85"
                  alt="A couple holding hands and looking toward the future"
                />
                <span className="photo-heart">♡</span>
              </div>

              <p className="story-eyebrow">THE NEXT CHAPTER</p>

              <h1 className="story-heading">The Best Is Still Ahead</h1>

              <div className="story-paragraphs">
                <p>
                  When I imagine our future, I don't only think about big
                  celebrations. I imagine ordinary mornings, sharing food,
                  laughing at silly things, and asking about each other's day.
                </p>

                <p>
                  I dream of the day we take the next step, build a home of our
                  own, and no longer have to count the days until we meet. I
                  know life won't always be perfect, but I hope we keep choosing
                  each other through every season.
                </p>

                <p>
                  Seven years brought us here. The rest of our lives are waiting
                  to be written—and there is one last little secret before you
                  turn that page.
                </p>
              </div>

              <blockquote className="story-quote">
                “I don't just want special moments with you. I want a lifetime
                of ordinary days together.”
              </blockquote>
            </>
          )
        ) : (
          <>
            <div className="story-photo-wrap">
              <img
                className="story-photo"
                src={pageData.image}
                alt={pageData.alt}
                loading="lazy"
              />
              <span className="photo-heart">♡</span>
            </div>

            <p className="story-eyebrow">{pageData.eyebrow}</p>

            <h1 className="story-heading">{pageData.title}</h1>

            <div className="story-paragraphs">
              {pageData.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="story-quote">
              {pageData.quote}
            </blockquote>
          </>
        )}

        <div className="story-progress" aria-label="Chapter page progress">
          <span className={page === 0 ? "active" : "done"} />
          <span className={page === 1 ? "active" : ""} />
        </div>

        <div className="story-navigation">
          <button className="story-secondary" onClick={back}>
            <ArrowLeft size={16} />
            Back
          </button>

          <span>{`${page + 1} / 2`}</span>

          <button className="story-primary" onClick={next}>
            {isFinal
              ? page === 0
                ? "Our Future →"
                : "Open the final secret"
              : page === 0
                ? "Turn the page"
                : chapter === 4
                  ? "Our Seven Years"
                  : "Continue"}
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <p className="story-footer">
        <Heart size={13} fill="currentColor" />
        Made of memories, held together by love
        <Sparkles size={13} />
      </p>
    </main>
  );
}
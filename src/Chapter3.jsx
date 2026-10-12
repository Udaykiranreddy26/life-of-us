
import { useState } from "react";
import {
  Heart,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Stars,
  Camera,
} from "lucide-react";
import "./Chapter3.css";

const storyPages = [
  {
    label: "OUR FIRST LITTLE MEMORIES",
    title: "A Freshers Day to Remember 📸",
    emoji: "📸",
    text: (
      <>
        Remember our Freshers Day? ❤️

        <br /><br />

        Among all the things happening around us, we
        got a photograph together — a little moment
        that became a part of our story.

        <br /><br />

        Back then, we probably didn't know how many
        memories we would make together or how special
        those simple college days would become.

        <br /><br />

        But today, that photograph feels like a tiny
        piece of our journey, capturing a moment from
        the beginning of our story.
      </>
    ),
  },
  {
    label: "LITTLE THINGS, BIG FEELINGS",
    title: "More Than Just Classmates 💗",
    emoji: "🌸",
    text: (
      <>
        We started as two classmates, sharing the
        same college days and slowly becoming a part
        of each other's lives.

        <br /><br />

        Our little conversations, unexpected meetups,
        and all those ordinary moments started
        becoming memories worth keeping.

        <br /><br />

        We didn't need every day to be extraordinary.
        Somehow, even the simplest moments felt
        special when they involved you.

        <br /><br />

        And little did I know that one day, I would
        be remembering those days with such a big
        smile. 🥹
      </>
    ),
  },
  {
    label: "A DAY I NEVER EXPECTED",
    title: "Then You Asked Me to Wait… 🤭",
    emoji: "💌",
    text: (
      <>
        And then came your house-opening ceremony.

        <br /><br />

        I never expected that day to become one of
        my favourite memories with you.

        <br /><br />

        But you asked me to wait because you wanted
        to show me how you looked in a half saree.

        <br /><br />

        Honestly, I had no idea what was waiting
        for me. I was just there, waiting, without
        knowing that a moment I would never forget
        was about to happen.

        <br /><br />

        And then… I saw you. ❤️
      </>
    ),
  },
  {
    label: "THE MOMENT WORDS DISAPPEARED",
    title: "You Left Me Speechless 🥹",
    emoji: "😍",
    text: (
      <>
        I don't know how to explain that moment
        perfectly, but I remember how I felt.

        <br /><br />

        You looked so beautiful in your half saree.
        And then there was your smile…

        <br /><br />

        That beautiful smile made me forget every
        word I could possibly have said.

        <br /><br />

        Remember how we used to be shy about talking
        to each other in college? 😂

        <br /><br />

        And there I was, with a thousand thoughts
        in my mind and absolutely no words coming out!

        <br /><br />

        Maybe you didn't realise how special that
        moment was to me. But I did. And I still
        remember your beauty and that smile. ❤️
      </>
    ),
  },
  {
    label: "A MEMORY I WILL ALWAYS KEEP",
    title: "If I Could Relive That Day… ♡",
    emoji: "💖",
    text: (
      <>
        I would happily go back to that day and
        experience that moment all over again.

        <br /><br />

        Not because everything had to be perfect,
        but because it was a moment with you that
        I never expected and will always treasure.

        <br /><br />

        From a photograph on Freshers Day to seeing
        you in that beautiful half saree, our story
        was quietly collecting moments I never
        wanted to forget.

        <br /><br />

        Maybe that's how love grows — not just
        through big promises, but through little
        memories that stay in our hearts.

        <br /><br />

        And if you ever wonder what made that day
        so special, my answer will always be simple:

        <br /><br />

        <strong>It was you, your beauty, and that
        unforgettable smile. ❤️</strong>
      </>
    ),
  },
];

export default function Chapter3({ onNext, onBack }) {
  const [currentPage, setCurrentPage] = useState(0);

  const page = storyPages[currentPage];
  const isLastPage = currentPage === storyPages.length - 1;

  function handleNext() {
    if (isLastPage) {
      onNext?.();
      return;
    }

    setCurrentPage((previous) => previous + 1);
  }

  function handleBack() {
    if (currentPage === 0) {
      onBack?.();
      return;
    }

    setCurrentPage((previous) => previous - 1);
  }

  return (
    <main className="chapter-three">
      <div className="ch3-floating ch3-heart-one">♡</div>
      <div className="ch3-floating ch3-heart-two">✦</div>
      <div className="ch3-floating ch3-heart-three">♡</div>

      <section className="ch3-card">
        <button
          className="ch3-back"
          onClick={handleBack}
          aria-label="Go back"
        >
          <ArrowLeft size={17} />
          <span>Back</span>
        </button>

        <div className="ch3-top-label">
          <Sparkles size={14} />
          CHAPTER 03
          <Sparkles size={14} />
        </div>

        <div className="ch3-icon">{page.emoji}</div>

        <p className="ch3-eyebrow">{page.label}</p>

        <h1 key={page.title} className="ch3-title">
          {page.title}
        </h1>

        <div key={currentPage} className="ch3-story-text">
          {page.text}
        </div>

        <div className="ch3-divider">
          <span />
          <Heart size={17} fill="currentColor" />
          <span />
        </div>

        <div className="ch3-progress">
          {storyPages.map((item, index) => (
            <button
              key={item.title}
              className={`ch3-dot ${
                index === currentPage ? "active" : ""
              }`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Go to story page ${index + 1}`}
              aria-current={
                index === currentPage ? "step" : undefined
              }
            />
          ))}
        </div>

        <p className="ch3-page-count">
          OUR MEMORIES · {currentPage + 1} OF {storyPages.length}
        </p>

        <button className="ch3-next" onClick={handleNext}>
          {isLastPage ? (
            <>
              Continue Our Story
              <Heart size={17} fill="currentColor" />
            </>
          ) : (
            <>
              Keep Reading
              <ArrowRight size={17} />
            </>
          )}
        </button>

        {isLastPage && (
          <p className="ch3-ending">
            Some smiles stay with us forever… ♡
          </p>
        )}

        <div className="ch3-footer">
          <Stars size={13} />
          <span>every little moment matters</span>
          <Stars size={13} />
        </div>
      </section>
    </main>
  );
}
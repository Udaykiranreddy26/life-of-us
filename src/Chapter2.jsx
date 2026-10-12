
import { useState } from "react";
import {
  Heart,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Stars,
} from "lucide-react";
import "./Chapter2.css";

const storyPages = [
  {
    label: "A LITTLE BEGINNING",
    title: "Where It All Began",
    text: (
      <>
        Somewhere on this little planet, two souls were
        living their own ordinary lives.

        <br /><br />

        Neither knew that one day, a person who once felt
        like a stranger would become someone so special.
      </>
    ),
    emoji: "🌎",
  },
  {
    label: "THE AWKWARD BEGINNING 😂",
    title: "So… Who Talks First?",
    text: (
      <>
        It started with college.

        <br /><br />

        Two classmates. Two different worlds. And somehow,
        a little bit of shyness whenever it came to talking
        to each other.

        <br /><br />

        We could be in the same place, have a thousand
        things to say, and still wonder who should speak first.

        <br /><br />

        If only our past selves knew what was coming…
        they would've laughed at us!
      </>
    ),
    emoji: "🙈",
  },
  {
    label: "LITTLE BY LITTLE",
    title: "The Unexpected Moments",
    text: (
      <>
        Then came the unexpected meetups.

        <br /><br />

        The little conversations. The random moments.
        The times that didn't seem important back then,
        but somehow became memories worth keeping.

        <br /><br />

        We didn't plan every meeting. We didn't know
        what those moments would mean.

        <br /><br />

        We were just slowly becoming a part of each
        other's everyday lives.
      </>
    ),
    emoji: "✨",
  },
  {
    label: "SOMETHING WAS CHANGING",
    title: "From Friendship to Care",
    text: (
      <>
        Slowly, without any grand announcement,
        friendship started becoming something more.

        <br /><br />

        A little more caring. A little more happiness
        whenever we met. A little more space for one
        person in the middle of an ordinary day.

        <br /><br />

        And somewhere between those ordinary moments,
        something extraordinary was happening.
      </>
    ),
    emoji: "💗",
  },
  {
    label: "THE BEAUTIFUL PART",
    title: "When Did We Fall in Love?",
    text: (
      <>
        The funniest part?

        <br /><br />

        We didn't even realise when it happened. ❤️

        <br /><br />

        Maybe there wasn't one exact moment when
        friendship turned into love.

        <br /><br />

        Maybe it was a hundred tiny moments, each
        quietly bringing two hearts closer.

        <br /><br />

        What started with the fear of saying hello
        was becoming a story we would want to keep
        telling forever.
      </>
    ),
    emoji: "🥹",
  },
];

export default function Chapter2({ onNext, onBack }) {
  const [currentPage, setCurrentPage] = useState(0);
  const page = storyPages[currentPage];
  const isLastPage = currentPage === storyPages.length - 1;

  function nextPage() {
    if (isLastPage) {
      onNext?.();
      return;
    }

    setCurrentPage((page) => page + 1);
  }

  function previousPage() {
    if (currentPage === 0) {
      onBack?.();
      return;
    }

    setCurrentPage((page) => page - 1);
  }

  return (
    <main className="chapter-two">
      <div className="ch2-floating ch2-heart-one">♡</div>
      <div className="ch2-floating ch2-heart-two">✦</div>
      <div className="ch2-floating ch2-heart-three">♡</div>

      <section className="ch2-card">
        <button
          className="ch2-back"
          onClick={previousPage}
          aria-label="Go to previous page"
        >
          <ArrowLeft size={17} />
          <span>Back</span>
        </button>

        <div className="ch2-top-label">
          <Sparkles size={14} />
          CHAPTER 02
          <Sparkles size={14} />
        </div>

        <div className="ch2-icon">
          {page.emoji}
        </div>

        <p className="ch2-eyebrow">{page.label}</p>

        <h1 key={page.title} className="ch2-title">
          {page.title}
        </h1>

        <div key={currentPage} className="ch2-story-text">
          {page.text}
        </div>

        <div className="ch2-divider">
          <span />
          <Heart size={17} fill="currentColor" />
          <span />
        </div>

        <div className="ch2-progress">
          {storyPages.map((item, index) => (
            <button
              key={item.title}
              className={`ch2-dot ${
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

        <p className="ch2-page-count">
          A LITTLE STORY · {currentPage + 1} OF {storyPages.length}
        </p>

        <button
          className="ch2-next"
          onClick={nextPage}
        >
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
          <p className="ch2-ending">
            And that was only the beginning… ♡
          </p>
        )}

        <div className="ch2-footer">
          <Stars size={13} />
          made of little moments & lots of love
          <Stars size={13} />
        </div>
      </section>
    </main>
  );
}
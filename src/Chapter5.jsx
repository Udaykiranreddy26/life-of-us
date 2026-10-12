import React, { useState } from "react";
import "./Chapter5.css";

const pages = [
{
title: "Seven Years, Still You",
paragraphs: [
"Seven years. Seven years of memories, laughter, little moments, misunderstandings, care, waiting, and finding our way back to each other.",
"When I look back at everything we have shared, one thing makes me smile the most: after all these years, you are still the person I want beside me.",
"We have grown, changed, and faced different chapters of life. But somewhere along the way, my heart kept choosing you."
],
quote: "Seven years later, and my favourite part of the story is still you."
},
{
title: "The Little Things I Dream About",
paragraphs: [
"When I imagine our future, I don't only imagine big celebrations or extraordinary moments.",
"I imagine ordinary mornings together, sharing food, laughing at silly things, asking about each other's day, and being there after a tiring day.",
"I imagine little arguments that end in understanding, random conversations that last for hours, and a home where we can both be ourselves.",
"Because with you, even an ordinary day feels like something worth remembering."
],
quote: "I don't just want special moments with you. I want ordinary life with you."
},
{
title: "The Next Beautiful Step",
paragraphs: [
"After everything we have been through, I find myself dreaming about the next chapter.",
"A day when we no longer have to say goodbye and wonder when we will meet again. A day when we begin building our own life, side by side.",
"I dream of marriage, of growing together, of celebrating each other's victories, and of holding each other through the difficult days.",
"I know life won't always be perfect. But I hope we keep choosing each other, learning together, and making our love stronger with time."
],
quote: "My dream isn't a perfect life. It's a life where we face it together."
},
{
title: "A Little Secret Behind Our Story",
paragraphs: [
"There is something special hidden inside the story of us.",
"Think of a new morning after a long, difficult night. The first light appearing on the horizon. A fresh beginning, a reason to rise again, and a reminder that even the darkest days don't last forever.",
"Now think of something beautiful that makes life feel blessed: kindness that stays, care that comforts, and a gentle presence that makes an ordinary journey feel extraordinary.",
"One meaning reminds me of rising light. The other reminds me of grace and a blessing.",
"And somehow, both meanings belong in our story."
],
quote: "One brings the feeling of a new beginning. The other brings the beauty that makes it meaningful."
},
{
title: "Can You See the Meaning Now?",
paragraphs: [
"Think about the person who kept trying, even when the future felt uncertain.",
"Think about the person who stayed beside him, gave him hope, and made the difficult days feel less lonely.",
"One story carries the meaning of a sunrise — rising again, bringing light, and beginning a new day.",
"The other carries the meaning of grace — a blessing, a quiet beauty, and a presence that makes life warmer.",
"These aren't just beautiful meanings. They are clues to the two people who created this story.",
"Seven years. Two hearts. One journey.",
"And now, there is just one little secret left."
],
quote: "Sometimes, the meaning of a name is already written in the life two people share."
}
];

export default function Chapter5({ onBack }) {
const [page, setPage] = useState(0);
const [showEnvelope, setShowEnvelope] = useState(false);
const [opened, setOpened] = useState(false);

const currentPage = pages[page];
const lastPage = page === pages.length - 1;

function handleBack() {
if (showEnvelope) {
setShowEnvelope(false);
return;
}

```
if (page === 0) {
  if (onBack) onBack();
} else {
  setPage(page - 1);
}
```

}

function handleNext() {
if (lastPage) {
setShowEnvelope(true);
} else {
setPage(page + 1);
}
}

function restartStory() {
setPage(0);
setShowEnvelope(false);
setOpened(false);
}

return ( <main className="chapter5-page"> <div className="chapter5-hearts" aria-hidden="true"> <span>♡</span> <span>♥</span> <span>♡</span> <span>♥</span> <span>♡</span> <span>♥</span> </div>

```
  {!showEnvelope ? (
    <section className="chapter5-card">
      <p className="chapter5-label">LIFE OF US</p>
      <p className="chapter5-page-number">
        Chapter Five · Page {page + 1}
      </p>

      <div className="chapter5-progress">
        {pages.map((item, index) => (
          <span
            key={item.title}
            className={index <= page ? "active" : ""}
          />
        ))}
      </div>

      <div className="chapter5-content" key={page}>
        <div className="chapter5-heart-icon">♡</div>
        <h1>{currentPage.title}</h1>

        <div className="chapter5-story">
          {currentPage.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <blockquote>{currentPage.quote}</blockquote>
      </div>

      <div className="chapter5-navigation">
        <button
          type="button"
          className="chapter5-back"
          onClick={handleBack}
        >
          ← Back
        </button>

        <span className="chapter5-counter">
          {page + 1} / {pages.length}
        </span>

        <button
          type="button"
          className="chapter5-next"
          onClick={handleNext}
        >
          {lastPage ? "Find Our Secret ♡" : "Continue →"}
        </button>
      </div>
    </section>
  ) : !opened ? (
    <section className="chapter5-envelope-screen">
      <p className="chapter5-label">ONE LAST LITTLE SECRET</p>
      <div className="chapter5-envelope-icon" aria-hidden="true">
        💌
      </div>

      <h1>Our Story Has Two Names</h1>

      <p className="chapter5-envelope-text">
        You've read the memories. You've followed the clues.
        Now open the little secret that has been part of our story all along.
      </p>

      <button
        type="button"
        className="chapter5-open-envelope"
        onClick={() => setOpened(true)}
      >
        Open Our Little Secret ❤️
      </button>

      <button
        type="button"
        className="chapter5-back-to-story"
        onClick={handleBack}
      >
        ← Read the clues again
      </button>
    </section>
  ) : (
    <section className="chapter5-reveal-screen">
      <p className="chapter5-label">THE MEANING OF US</p>
      <div className="chapter5-reveal-sun" aria-hidden="true">
        ☀
      </div>

      <p className="chapter5-reveal-intro">
        The sunrise that kept rising through difficult days…
      </p>

      <h1 className="chapter5-names">
        Uday <span>❤️</span> Sri
      </h1>

      <p className="chapter5-reveal-subtitle">
        One sunrise. One blessing. Seven years of love.
      </p>

      <div className="chapter5-love-letter">
        <p>
          One name carries the meaning of rising light, a new beginning,
          and the courage to rise again after the darkest night.
        </p>

        <p>
          The other carries the meaning of grace, goodness, and a blessing
          that makes life's journey more beautiful.
        </p>

        <p>
          And now you know the two people behind <em>Life of Us</em>.
        </p>

        <p>
          From two college classmates to seven years of memories, through
          difficult days and distance, my favourite part has always been
          that we have had each other.
        </p>

        <p>
          I dream of the day we take the next step, build our own home,
          and begin the rest of our lives together. I cannot promise that
          every day will be easy, but I promise to keep choosing you,
          caring for you, and growing with you.
        </p>
      </div>

      <div className="chapter5-forever">
        Two names. One love. A lifetime still ahead.
        <br />
        <strong>
          Our story isn't over. It's the beginning of our forever. ♡
        </strong>
      </div>

      <button
        type="button"
        className="chapter5-finish-button"
        onClick={restartStory}
      >
        Read Our Story Again ↺
      </button>
    </section>
  )}
</main>

);
}

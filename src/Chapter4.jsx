import React, { useState } from "react";
import "./Chapter4.css";

const pages = [
{
title: "When College Was Ending",
paragraphs: [
"College was slowly coming to an end, and a new chapter of life was waiting for me.",
"Everyone was thinking about their future, their dreams, and where life would take them.",
"But inside me, I was carrying fears I couldn't easily explain. I didn't know what the future had planned for me."
],
quote: "Sometimes, the hardest part of growing up is not knowing what comes next."
},
{
title: "The Days I Lost Hope",
paragraphs: [
"There was a time when I questioned myself. Would I settle in life? Would all my efforts lead somewhere? Would I be able to build the future I dreamed of?",
"Some days, the uncertainty felt heavier than I could explain. I needed someone who could see beyond my struggles and believe in the person I was trying to become.",
"And you were there."
],
quote: "When I struggled to believe in myself, you never stopped believing in me."
},
{
title: "You Kept Your Promise",
paragraphs: [
"You told me that whatever happened, you would be there for me.",
"It wasn't just a beautiful sentence. You proved it through your actions, your patience, your care, and the way you stayed beside me.",
"You didn't need to solve every problem in my life. Sometimes, knowing I wasn't facing everything alone was enough.",
"You gave me something I desperately needed: hope."
],
quote: "You said you would stay. And you did."
},
{
title: "As I Built My Future",
paragraphs: [
"Eventually, I started my career and began taking steps toward the life I wanted to build.",
"There were still challenges, responsibilities, and things I had to figure out. But I wasn't the same person who had once wondered whether he could make it.",
"Your support became a quiet strength in my journey. You reminded me that difficult days don't decide the whole story.",
"A part of every step forward belonged to the love that stood beside me."
],
quote: "My dreams were mine, but your belief helped me keep chasing them."
},
{
title: "Even Across the Distance",
paragraphs: [
"Then came the distance.",
"We couldn't always meet whenever we wanted. We had to miss each other, wait for moments together, and find ways to feel close even when life kept us apart.",
"Sometimes, all I wanted was to see you for a little while. Whenever I finally saw you again, something inside me felt new.",
"That familiar smile, that familiar presence, that feeling of being with you — somehow, I would fall in love with you all over again.",
"After everything we had faced, my heart still found its way back to the same person."
],
quote: "Distance may keep us apart for a while, but it has never changed where my heart belongs."
}
];

export default function Chapter4({ onBack, onNext }) {
const [page, setPage] = useState(0);
const currentPage = pages[page];
const lastPage = page === pages.length - 1;

function handleBack() {
if (page === 0) {
if (onBack) onBack();
} else {
setPage(page - 1);
}
}

function handleNext() {
if (lastPage) {
if (onNext) onNext();
} else {
setPage(page + 1);
}
}

return ( <main className="chapter4-page"> <div className="chapter4-hearts" aria-hidden="true"> <span>♡</span> <span>♥</span> <span>♡</span> <span>♥</span> <span>♡</span> </div>

```
  <section className="chapter4-card">
    <p className="chapter4-label">LIFE OF US</p>
    <p className="chapter4-page-number">
      Chapter Four · Page {page + 1}
    </p>

    <div className="chapter4-progress">
      {pages.map((item, index) => (
        <span
          key={item.title}
          className={index <= page ? "active" : ""}
        />
      ))}
    </div>

    <div className="chapter4-content" key={page}>
      <div className="chapter4-heart-icon">♡</div>
      <h1>{currentPage.title}</h1>

      <div className="chapter4-story">
        {currentPage.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <blockquote>{currentPage.quote}</blockquote>
    </div>

    <div className="chapter4-navigation">
      <button
        type="button"
        className="chapter4-back"
        onClick={handleBack}
      >
        ← Back
      </button>

      <span className="chapter4-counter">
        {page + 1} / {pages.length}
      </span>

      <button
        type="button"
        className="chapter4-next"
        onClick={handleNext}
      >
        {lastPage ? "Our Seven Years →" : "Continue →"}
      </button>
    </div>
  </section>

  <p className="chapter4-footer">
    Some people make the journey worth it. ♡
  </p>
</main>

);
}

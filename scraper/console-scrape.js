// ============================================================
// UNIVERSAL LeetCode author solution scraper
// 
// Usage:
//   1. Go to https://leetcode.com/u/<username>/
//   2. Click the "Solutions" tab
//   3. Paste this entire script in the browser console
//   4. It clicks "Show More" until all solutions load, then downloads JSON
//
// Change USERNAME and FILENAME below to target any author.
// ============================================================

const USERNAME = "votrubac";       // ← change this to scrape a different author
const FILENAME  = "vlad-solutions.json"; // ← change this for the output filename

// ============================================================

(async () => {
  const CLICK_DELAY = 1000;
  let clicks = 0;

  console.log(`🚀 Starting scraper for: ${USERNAME}`);
  console.log("🔄 Clicking 'Show More' to load all solutions...");

  while (true) {
    const buttons = [...document.querySelectorAll("div")].filter(
      (d) => d.textContent.trim() === "Show More" && d.classList.contains("cursor-pointer")
    );

    if (buttons.length === 0) {
      console.log("✅ No more 'Show More' button — all solutions loaded!");
      break;
    }

    buttons[0].click();
    clicks++;
    const linkCount = document.querySelectorAll('a[href*="/problems/"][href*="/solutions/"]').length;
    if (clicks % 10 === 0) console.log(`  Clicked ${clicks} times, ${linkCount} solutions loaded...`);

    await new Promise((r) => setTimeout(r, CLICK_DELAY));
  }

  // Extract all solution links
  const links = document.querySelectorAll('a[href*="/problems/"][href*="/solutions/"]');
  const solutions = {};

  links.forEach((a) => {
    const href = a.getAttribute("href");
    const match = href.match(/\/problems\/([^/]+)\/solutions\/(\d+)\//);
    if (match) {
      const problemSlug = match[1];
      const titleSpan = a.querySelector("span.font-medium");
      const title = titleSpan ? titleSpan.textContent.trim() : "";
      if (!solutions[problemSlug]) {
        solutions[problemSlug] = {
          title,
          url: "https://leetcode.com" + href,
        };
      }
    }
  });

  const count = Object.keys(solutions).length;
  console.log(`\n✅ Done! Found ${count} unique problem solutions (${clicks} clicks).`);

  const blob = new Blob([JSON.stringify(solutions, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const dl = document.createElement("a");
  dl.href = url;
  dl.download = FILENAME;
  dl.click();
  URL.revokeObjectURL(url);

  console.log(`📥 Downloaded ${FILENAME}!`);
})();

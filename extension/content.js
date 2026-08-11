(() => {
  if (window.vladExtensionLoaded) return;
  window.vladExtensionLoaded = true;

  let solutions = null;
  let lastUrl = location.href;
  let pillInjected = false;

  function slug() {
    const m = location.pathname.match(/\/problems\/([^/]+)/);
    return m ? m[1] : null;
  }

  async function getSolutions() {
    if (!solutions) {
      solutions = await fetch(chrome.runtime.getURL("solutions.json")).then(r => r.json());
    }
    return solutions;
  }

  // Try to inject a pill into LeetCode's Solutions filter bar.
  // The filter bar contains pills like "All", "My Solution", "Python3", etc.
  // We find the pill container and prepend a "🧠 Vlad" pill.
  async function tryInjectPill() {
    const currentSlug = slug();
    if (!currentSlug) return;

    const db = await getSolutions();
    const solution = db[currentSlug];

    // Remove any existing Vlad pill first (page might re-render)
    document.getElementById("vlad-pill")?.remove();

    // Find the filter pill row — it holds the "All" pill span
    // Selector: a span with text "All" inside the Solutions panel
    const allPills = [...document.querySelectorAll("span")].filter(
      el => el.textContent.trim() === "All" && el.closest('[class*="rounded-full"]')
    );
    
    const allPill = allPills[0];
    const flexContainer = allPill?.parentElement;

    if (!flexContainer) return false;

    // Check if pill is already injected and in the correct place
    const existingPill = document.getElementById("vlad-pill");
    if (existingPill && existingPill.parentElement === flexContainer) {
      return true;
    }
    existingPill?.remove(); // Remove if it's orphaned or in the wrong place

    const pill = document.createElement(solution ? "a" : "span");
    pill.id = "vlad-pill";

    // Match LeetCode's own pill styles
    pill.className = [
      "inline-flex", "items-center", "gap-1.5",
      "whitespace-nowrap", "rounded-full", "px-3", "py-[6px]",
      "text-xs", "lc-md:px-2", "lc-md:py-[3px]",
      "font-medium", "vlad-base",
      solution ? "vlad-found" : "vlad-disabled"
    ].join(" ");

    if (solution) {
      pill.href = solution.url;
      pill.title = "Open votrubac's solution";
      pill.innerHTML = `🧠 Vlad`;

      // Navigate within LeetCode's SPA (no new tab)
      pill.addEventListener("click", (e) => {
        e.preventDefault();
        history.pushState({}, "", solution.url.replace("https://leetcode.com", ""));
        window.dispatchEvent(new PopStateEvent("popstate"));
        // Fallback: navigate directly if SPA doesn't handle it
        setTimeout(() => {
          if (!document.querySelector('[class*="solution-detail"]') &&
              !document.querySelector('[data-track-load="solution_detail"]')) {
            location.href = solution.url;
          }
        }, 800);
      });
    } else {
      pill.title = "votrubac hasn't posted a solution for this problem";
      pill.innerHTML = `❌ Vlad`;
    }

    // Insert after "My Solution" if it exists, otherwise after "All"
    const mySolutionPill = [...flexContainer.children].find(el => el.textContent.trim() === "My Solution");
    const insertAfterNode = mySolutionPill || allPill;
    insertAfterNode.after(pill);

    return true;
  }

  // Poll for the Solutions panel to appear (it's lazy-rendered by LeetCode)
  async function waitAndInject() {
    pillInjected = false;
    let attempts = 0;
    const timer = setInterval(async () => {
      attempts++;
      const ok = await tryInjectPill();
      if (ok || attempts > 20) clearInterval(timer); // give up after 10s
    }, 500);
  }

  // Watch for SPA navigation and DOM changes
  setInterval(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      waitAndInject();
    } else if (slug()) {
      // Re-check if Solutions panel is visible but pill is missing
      // (e.g. user clicked Description tab, then back to Solutions tab)
      tryInjectPill();
    }
  }, 500);

  waitAndInject();
})();

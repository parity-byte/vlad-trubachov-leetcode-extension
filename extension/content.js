(() => {
  if (window.vladExtensionLoaded) return;
  window.vladExtensionLoaded = true;

  let dbs = {};
  let lastUrl = location.href;

  // Authors ordered left to right (lee215 first, then votrubac)
  const AUTHORS = [
    {
      id: "lee-pill",
      key: "lee",
      file: "lee-solutions.json",
      label: "🧠 lee215",
      foundTitle: "Open lee215's solution",
      missingTitle: "lee215 hasn't posted a solution for this problem",
    },
    {
      id: "vlad-pill",
      key: "vlad",
      file: "solutions.json",
      label: "🧠 Vlad",
      foundTitle: "Open votrubac's solution",
      missingTitle: "votrubac hasn't posted a solution for this problem",
    },
  ];

  function slug() {
    const m = location.pathname.match(/\/problems\/([^/]+)/);
    return m ? m[1] : null;
  }

  async function getDb(author) {
    if (!dbs[author.key]) {
      dbs[author.key] = await fetch(chrome.runtime.getURL(author.file)).then(r => r.json());
    }
    return dbs[author.key];
  }

  function makePill(author, solution) {
    const pill = document.createElement(solution ? "a" : "span");
    pill.id = author.id;
    pill.className = [
      "inline-flex", "items-center", "gap-1.5",
      "whitespace-nowrap", "rounded-full", "px-3", "py-[6px]",
      "text-xs", "lc-md:px-2", "lc-md:py-[3px]",
      "font-medium", "vlad-base",
      solution ? "vlad-found" : "vlad-disabled"
    ].join(" ");

    if (solution) {
      pill.href = solution.url;
      pill.title = author.foundTitle;
      pill.innerHTML = author.label;
      pill.addEventListener("click", (e) => {
        e.preventDefault();
        history.pushState({}, "", solution.url.replace("https://leetcode.com", ""));
        window.dispatchEvent(new PopStateEvent("popstate"));
        setTimeout(() => {
          if (!document.querySelector('[class*="solution-detail"]') &&
              !document.querySelector('[data-track-load="solution_detail"]')) {
            location.href = solution.url;
          }
        }, 800);
      });
    } else {
      pill.title = author.missingTitle;
      pill.innerHTML = `❌ ${author.label.split(" ").pop()}`;
    }
    return pill;
  }

  async function tryInjectPills() {
    const currentSlug = slug();
    if (!currentSlug) return false;

    // Find the filter pill row
    const allPill = [...document.querySelectorAll("span")].find(
      el => el.textContent.trim() === "All" && el.closest('[class*="rounded-full"]')
    );
    const flexContainer = allPill?.parentElement;
    if (!flexContainer) return false;

    // Check if pills are already in THIS container (not in a stale/detached one)
    // Use a data attribute on the container itself as a cheap marker
    if (flexContainer.dataset.vladInjected === "1") return true;

    // Remove any stale pills from anywhere in the document
    AUTHORS.forEach(a => document.getElementById(a.id)?.remove());
    flexContainer.dataset.vladInjected = "1";

    // Load all DBs in parallel
    const [leeSolutions, vladSolutions] = await Promise.all(AUTHORS.map(a => getDb(a)));
    const dbMap = { lee: leeSolutions, vlad: vladSolutions };

    // Insert after "My Solution" if it exists, otherwise after "All"
    const mySolutionPill = [...flexContainer.children].find(
      el => el.textContent.trim() === "My Solution"
    );
    let insertAfter = mySolutionPill || allPill;

    // Insert in order: lee215, then Vlad (lee goes first = closer to "All")
    for (const author of AUTHORS) {
      const solution = dbMap[author.key][currentSlug];
      const pill = makePill(author, solution);
      insertAfter.after(pill);
      insertAfter = pill; // next pill goes after this one
    }

    return true;
  }

  // Poll until the Solutions panel appears (lazy-rendered by LeetCode)
  function waitAndInject() {
    let attempts = 0;
    const timer = setInterval(async () => {
      attempts++;
      const ok = await tryInjectPills();
      if (ok || attempts > 20) clearInterval(timer);
    }, 500);
  }

  // Watch for SPA navigation and DOM changes
  setInterval(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      waitAndInject();
    } else if (slug()) {
      tryInjectPills();
    }
  }, 500);

  waitAndInject();
})();

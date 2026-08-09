(() => {
  if (window.vladExtensionLoaded) return;
  window.vladExtensionLoaded = true;

  let solutionsCache = null;
  let lastUrl = location.href;

  function getProblemSlug() {
    const match = location.pathname.match(/\/problems\/([^/]+)/);
    return match ? match[1] : null;
  }

  async function updateButton() {
    const slug = getProblemSlug();
    if (!slug) {
      document.getElementById("vlad-solution-btn")?.remove();
      return;
    }

    if (!solutionsCache) {
      solutionsCache = await fetch(chrome.runtime.getURL("solutions.json")).then(r => r.json());
    }

    let btn = document.getElementById("vlad-solution-btn");
    if (!btn) {
      btn = document.createElement("a");
      btn.id = "vlad-solution-btn";
      document.body.appendChild(btn);
    }

    const solution = solutionsCache[slug];
    if (solution) {
      btn.href = solution.url;
      btn.target = "_blank";
      btn.className = "vlad-found";
      btn.innerHTML = `<span class="vlad-emoji">🧠</span> Vlad's Solution`;
    } else {
      btn.removeAttribute("href");
      btn.removeAttribute("target");
      btn.className = "vlad-not-found";
      btn.innerHTML = `<span class="vlad-emoji">😶</span> No Vlad solution`;
    }
  }

  updateButton();
  setInterval(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      updateButton();
    }
  }, 500);
})();

with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

target = '''  const reachCard = $(".reach-card");
  if (reachCard) {
    reachCard.addEventListener("click", (e) => {
      const tab = e.target.closest(".reach-tab");
      if (!tab) return;
      const targetId = tab.dataset.reachTab;
      $$(".reach-tab", reachCard).forEach((t) => {
        const active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", String(active));
      });
      $$(".reach-panel", reachCard).forEach((panel) => {
        panel.hidden = panel.id !== `panel-${targetId}`;
      });
    });
  }'''

replacement = '''  // Reach tabs interactive switcher
  window.selectReachTab = function(targetId) {
    const card = $(".reach-card");
    if (!card) return;
    $$(".reach-tab", card).forEach((t) => {
      const active = t.dataset.reachTab === targetId;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
    });
    $$(".reach-panel", card).forEach((panel) => {
      const match = panel.id === `panel-${targetId}`;
      if (match) {
        panel.removeAttribute("hidden");
        panel.classList.remove("is-hidden");
        panel.style.display = "block";
      } else {
        panel.setAttribute("hidden", "");
        panel.classList.add("is-hidden");
        panel.style.display = "none";
      }
    });
  };

  const reachCard = $(".reach-card");
  if (reachCard) {
    reachCard.addEventListener("click", (e) => {
      const tab = e.target.closest(".reach-tab");
      if (!tab) return;
      window.selectReachTab(tab.dataset.reachTab);
    });
  }'''

js_norm = js.replace('\r\n', '\n')
target_norm = target.replace('\r\n', '\n')
replacement_norm = replacement.replace('\r\n', '\n')

if target_norm in js_norm:
    js_norm = js_norm.replace(target_norm, replacement_norm, 1)
    with open('script.js', 'w', encoding='utf-8', newline='') as f:
        f.write(js_norm.replace('\n', '\r\n'))
    print("SUCCESS: script.js updated")
else:
    print("ERROR: target not found in script.js")


with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

old_tabs = '''      <button class="reach-tab is-active" type="button" role="tab" id="tab-airport" aria-selected="true" aria-controls="panel-airport" data-reach-tab="airport">
        <span class="reach-tab-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
          </svg>
        </span>
        <span class="reach-tab-title">From IGI Airport</span>
      </button>

      <button class="reach-tab" type="button" role="tab" id="tab-railway" aria-selected="false" aria-controls="panel-railway" data-reach-tab="railway">
        <span class="reach-tab-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="16" height="16" x="4" y="3" rx="2"/>
            <path d="M4 11h16"/>
            <path d="M12 3v8"/>
            <path d="m8 19-2 3"/>
            <path d="m16 19 2 3"/>
            <circle cx="8" cy="15" r="1"/>
            <circle cx="16" cy="15" r="1"/>
          </svg>
        </span>
        <span class="reach-tab-title">From Railway Station</span>
      </button>

      <button class="reach-tab" type="button" role="tab" id="tab-metro" aria-selected="false" aria-controls="panel-metro" data-reach-tab="metro">
        <span class="reach-tab-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="16" height="16" x="4" y="3" rx="2"/>
            <path d="M4 11h16"/>
            <circle cx="8" cy="15" r="1"/>
            <circle cx="16" cy="15" r="1"/>
            <path d="M9 19l-3 3"/>
            <path d="M15 19l3 3"/>
          </svg>
        </span>
        <span class="reach-tab-title">By Delhi Metro</span>
      </button>'''

new_tabs = '''      <button class="reach-tab is-active" type="button" role="tab" id="tab-airport" aria-selected="true" aria-controls="panel-airport" data-reach-tab="airport" onclick="selectReachTab('airport')">
        <span class="reach-tab-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
          </svg>
        </span>
        <span class="reach-tab-title">From IGI Airport</span>
      </button>

      <button class="reach-tab" type="button" role="tab" id="tab-railway" aria-selected="false" aria-controls="panel-railway" data-reach-tab="railway" onclick="selectReachTab('railway')">
        <span class="reach-tab-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="16" height="16" x="4" y="3" rx="2"/>
            <path d="M4 11h16"/>
            <path d="M12 3v8"/>
            <path d="m8 19-2 3"/>
            <path d="m16 19 2 3"/>
            <circle cx="8" cy="15" r="1"/>
            <circle cx="16" cy="15" r="1"/>
          </svg>
        </span>
        <span class="reach-tab-title">From Railway Station</span>
      </button>

      <button class="reach-tab" type="button" role="tab" id="tab-metro" aria-selected="false" aria-controls="panel-metro" data-reach-tab="metro" onclick="selectReachTab('metro')">
        <span class="reach-tab-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="16" height="16" x="4" y="3" rx="2"/>
            <path d="M4 11h16"/>
            <circle cx="8" cy="15" r="1"/>
            <circle cx="16" cy="15" r="1"/>
            <path d="M9 19l-3 3"/>
            <path d="M15 19l3 3"/>
          </svg>
        </span>
        <span class="reach-tab-title">By Delhi Metro</span>
      </button>'''

# Also add the inline script right after the reach-card closing div
old_closing = '''      <div class="reach-tip">
        <span class="reach-tip-badge">TIP</span>
        <p class="reach-tip-text">From Munirka or Hauz Khas Metro Station, frequent auto-rickshaws, e-rickshaws, and campus shuttle services are readily available.</p>
      </div>
    </div>
  </div>'''

new_closing = '''      <div class="reach-tip">
        <span class="reach-tip-badge">TIP</span>
        <p class="reach-tip-text">From Munirka or Hauz Khas Metro Station, frequent auto-rickshaws, e-rickshaws, and campus shuttle services are readily available.</p>
      </div>
    </div>
  </div>

  <script>
    function selectReachTab(targetId) {
      const card = document.querySelector('.reach-card');
      if (!card) return;
      const tabs = card.querySelectorAll('.reach-tab');
      const panels = card.querySelectorAll('.reach-panel');
      tabs.forEach(function(t) {
        const active = t.dataset.reachTab === targetId;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });
      panels.forEach(function(p) {
        const match = p.id === 'panel-' + targetId;
        if (match) {
          p.removeAttribute('hidden');
          p.classList.remove('is-hidden');
          p.style.display = 'block';
        } else {
          p.setAttribute('hidden', '');
          p.classList.add('is-hidden');
          p.style.display = 'none';
        }
      });
    }
  </script>'''

# normalize CRLF for replacing
html_norm = html.replace('\r\n', '\n')
old_tabs_norm = old_tabs.replace('\r\n', '\n')
new_tabs_norm = new_tabs.replace('\r\n', '\n')
old_closing_norm = old_closing.replace('\r\n', '\n')
new_closing_norm = new_closing.replace('\r\n', '\n')

if old_tabs_norm in html_norm and old_closing_norm in html_norm:
    html_norm = html_norm.replace(old_tabs_norm, new_tabs_norm, 1)
    html_norm = html_norm.replace(old_closing_norm, new_closing_norm, 1)
    with open('index.html', 'w', encoding='utf-8', newline='') as f:
        f.write(html_norm.replace('\n', '\r\n'))
    print("SUCCESS: index.html updated with direct onclick & inline script")
else:
    print("ERROR: tabs or closing not found in index.html")


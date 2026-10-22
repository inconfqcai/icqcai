with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

target = '''.reach-tab {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 15px 22px;
  width: 100%;
  border: none;
  background: #f0faf8;
  color: #17242f;
  font-family: inherit;
  font-size: 15.5px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  position: relative;
  transition: background 0.2s ease, color 0.2s ease;
  border-bottom: 1px solid #e2f0ed;
}'''

replacement = '''.reach-tab {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 15px 22px;
  width: 100%;
  border: none;
  background: #f0faf8;
  color: #17242f;
  font-family: inherit;
  font-size: 15.5px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  position: relative;
  transition: background 0.2s ease, color 0.2s ease;
  border-bottom: 1px solid #e2f0ed;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

.reach-tab * {
  pointer-events: none;
}'''

target_panel = '''/* Active Panel */
.reach-panel {
  padding: 26px 28px 28px;
}'''

replacement_panel = '''/* Active Panel */
.reach-panel {
  display: block;
  padding: 26px 28px 28px;
  animation: reachFadeIn 0.25s ease;
}

.reach-panel[hidden],
.reach-panel.is-hidden {
  display: none !important;
}

@keyframes reachFadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}'''

css_norm = css.replace('\r\n', '\n')
target_norm = target.replace('\r\n', '\n')
replacement_norm = replacement.replace('\r\n', '\n')
target_panel_norm = target_panel.replace('\r\n', '\n')
replacement_panel_norm = replacement_panel.replace('\r\n', '\n')

if target_norm in css_norm and target_panel_norm in css_norm:
    css_norm = css_norm.replace(target_norm, replacement_norm, 1)
    css_norm = css_norm.replace(target_panel_norm, replacement_panel_norm, 1)
    with open('style.css', 'w', encoding='utf-8', newline='') as f:
        f.write(css_norm.replace('\n', '\r\n'))
    print("SUCCESS: style.css updated with pointer-events and display rules")
else:
    print("ERROR: targets not found in style.css")


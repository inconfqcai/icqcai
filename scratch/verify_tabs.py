with open('index.html', 'r', encoding='utf-8') as f:
    h = f.read()

tabs = ['airport', 'railway', 'metro']
for t in tabs:
    assert f"onclick=\"selectReachTab('{t}')\"" in h, f"Missing onclick for {t}"
    assert f'id="panel-{t}"' in h, f"Missing panel for {t}"
    assert f'data-reach-tab="{t}"' in h, f"Missing data-reach-tab for {t}"

print("All 3 tabs and panels verified successfully!")


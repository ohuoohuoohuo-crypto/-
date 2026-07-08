**Source Visual Truth**
- Target reference: `/var/folders/3y/7p49xbd53_dfd4_vxjqtpmpr0000gn/T/codex-clipboard-948a8f75-8736-475e-ac28-8e87d1d949bc.png`
- Intent: extend the whole site language switcher from Chinese/English to Chinese/English/Japanese, and make all existing page content support Japanese mode.

**Implementation Evidence**
- Home URL tested: `http://127.0.0.1:4174/index.html?v=ja-mode-qa1`
- About URL tested: `http://127.0.0.1:4174/about.html?v=ja-mode-qa1`
- Contact URL tested: `http://127.0.0.1:4174/contact.html?v=ja-mode-qa1`
- Mobile Contact URL tested: `http://127.0.0.1:4174/contact.html?v=ja-mode-mobile-qa1`
- Desktop viewport: 1440 x 900, state: Japanese language.
- Mobile viewport: 390 x 844, state: Japanese language.

**Full-View Comparison Evidence**
- The language switcher now shows `中文`, `English`, and `日本語` on Home, About, and Contact pages.
- Japanese mode sets the document language to `ja-JP`.
- Japanese mode persists across page navigation through local language storage when available.
- All 98 `data-i18n` keys used by the three HTML pages are present in `zh`, `en`, and `ja` dictionaries.

**Focused Region Comparison Evidence**
- Home page Japanese check: navigation, hero title, and CTA render in Japanese.
- About page Japanese check: breadcrumb, hero title, story title, team title, and selected team detail render in Japanese.
- Contact page Japanese check: page title, contact copy, supported language label, developer value, and footer contact label render in Japanese.
- Mobile header check: the three-language switcher fits in one row with no horizontal overflow.

**Findings**
- No P0/P1/P2 issues found.
- Japanese language dictionary: passed.
- Cross-page language persistence: passed in browser QA.
- Desktop responsive check: passed.
- Mobile responsive check: passed.

**Implementation Checklist**
- Added `日本語` button to Home, About, and Contact headers: passed.
- Added Japanese translations for visible site copy: passed.
- Added Japanese team-detail data: passed.
- Added `ja-JP` language metadata: passed.
- Translation key completeness check: passed.
- Horizontal overflow check: passed.
- JS syntax check: passed.
- Git whitespace check: passed.

final result: passed

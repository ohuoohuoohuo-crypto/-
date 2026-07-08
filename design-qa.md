**Source Visual Truth**
- Target reference: `/var/folders/3y/7p49xbd53_dfd4_vxjqtpmpr0000gn/T/codex-clipboard-fc9e0568-1ae1-457f-82ac-c395054a3853.png`
- Contact reference: `/var/folders/3y/7p49xbd53_dfd4_vxjqtpmpr0000gn/T/codex-clipboard-79fc2ead-823c-4b27-a992-e936b93aacf8.png`
- Intent: restore Chinese text to the previous Chinese-first font rendering while keeping Japanese mode available.

**Implementation Evidence**
- Home URL tested: `http://127.0.0.1:4174/index.html?v=font-zh-qa2`
- Contact URL tested: `http://127.0.0.1:4174/contact.html?v=font-zh-qa2`
- Japanese check URL tested: `http://127.0.0.1:4174/contact.html?v=font-ja-qa1`
- Desktop viewport: 1440 x 900.

**Font Evidence**
- Chinese home hero title, hero lead, and primary button computed font stack:
  `Inter, ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif`
- Chinese contact title, body copy, language heading, and developer heading use the same Chinese-first stack.
- Japanese contact title in `ja-JP` mode keeps the Japanese-first stack:
  `Inter, ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", "Hiragino Sans", "Yu Gothic", "Noto Sans JP", "PingFang SC", "Microsoft YaHei", sans-serif`

**Findings**
- No P0/P1/P2 issues found.
- Chinese mode font priority: passed.
- Japanese mode font priority: passed.
- Desktop horizontal overflow check: passed.

**Implementation Checklist**
- Restored default Chinese-first font stack: passed.
- Added `ja-JP`-scoped Japanese font stack: passed.
- Bumped stylesheet query on all pages to avoid stale CSS: passed.
- JS syntax check: passed.
- Git whitespace check: passed.

final result: passed

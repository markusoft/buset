# BUSET static showcase

Plain HTML, CSS and vanilla JavaScript. No Node.js, build step, framework, account, cookies, analytics, external fonts or backend required. All visual assets are local. Android screenshots feature the three-player Fog Island seafaring map, captured in the current Full edition; all five public art styles are shown. The hero and builder show islands, sea and hidden terrain instead of the Standard island. No Private/Original assets or personal game data are included.

## Preview

Open index.html directly, or visit `http://localhost/catan/buset-site/` with XAMPP. The dedicated privacy page is `privacy/index.html` (through HTTP: `privacy/`). The website's artwork selector, enlarged screenshot viewer and navigation are functional; no fake store download buttons are shown.

## Upload to GitHub Pages

1. Create a separate public repository, such as `buset`, on GitHub.
2. Upload **the contents** of this folder to its root: index.html, styles.css, script.js, assets/, privacy/, and .nojekyll. Do not upload the game source, APKs, signing keys or the whole catan folder.
3. In repository Settings > Pages, choose Deploy from a branch, main, / (root), Save. Use the published HTTPS URL shown by GitHub; enable Enforce HTTPS.
4. Check home, every artwork tab and the Privacy Policy page in an incognito window. Relative links work under a repository subpath such as `https://USERNAME.github.io/buset/`.
5. The Play Store privacy URL will be `https://USERNAME.github.io/buset/privacy/`. Replace USERNAME with your actual GitHub name; no website has been published by creating these files.

## Update later

- In script.js, set `playStoreLinks.free` and `.full` to the SAME BUSET Play listing when published. The app is a free download with a one-time in-app Full unlock.
- Edit website copy in index.html. The Free/Full comparison reflects the current Free/Full access limits, not promised future features. Android 8.0+ minimum.
- The site policy includes ease-z and mark.prosoftphils@gmail.com. Its scope is Free/Full; LAN is explicitly described as unencrypted. Keep privacy/index.html and the bundled app privacy-policy.txt in sync when product behavior changes. The policy page is linked in the header and footer and has a link back to the showcase.
- Current screenshots are compressed WebP copies of actual native Android screens, with sample maps/game data. Source captures are retained under artwork/website-screenshots in the game project. Use current app captures when UI changes; do not show Private-only features as public features.
- Public screens/terrain previews do not constitute a legal review of artwork rights.

Publisher: ease-z. Support: mark.prosoftphils@gmail.com.

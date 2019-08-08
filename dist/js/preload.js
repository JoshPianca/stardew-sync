/*!
 * stardew-sync v1.0.0
 * An unofficial tool for syncing stardew saves cross-platform
 * (c) 2019 
 *  GPL-3.0-or-later License
 * 
 */

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  } 
  
  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

const { playwrightTest } = require('@axe-core/watcher')

module.exports = playwrightTest({
  axe: {
    apiKey: 'ff23bf2c-2a2a-4d7c-814c-6cd6198578b5'
  },
  headless: false,
  // Any other Playwright configuration you’d pass to `chromium.launchPersistentContext()` here
})
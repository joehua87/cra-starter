/* eslint-disable global-require */

import { configure } from '@storybook/react'

function loadStories() {
  require('../src/containers/Layout/stories')
}

configure(loadStories, module)

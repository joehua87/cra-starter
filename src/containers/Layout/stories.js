import React from 'react'
import { storiesOf } from '@storybook/react'

import Layout from './'

storiesOf('Layout', module)
  .add('default', () => (
    <Layout>Layout children goes here</Layout>
  ))

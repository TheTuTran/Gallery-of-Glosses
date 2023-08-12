import React from 'react'
import { ImageTrack } from './ImageTrack'

describe('<ImageTrack />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ImageTrack />)
  })
})
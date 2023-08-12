import React from 'react'
import { GlossDetails } from './GlossDetails'

describe('<GlossDetails />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GlossDetails />)
  })
})
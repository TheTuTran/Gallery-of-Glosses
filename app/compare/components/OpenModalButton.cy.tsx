import React from 'react'
import { OpenModalButton } from './OpenModalButton'

describe('<OpenModalButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<OpenModalButton />)
  })
})
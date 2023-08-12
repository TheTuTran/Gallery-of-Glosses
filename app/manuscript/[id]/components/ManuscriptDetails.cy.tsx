import React from 'react'
import { ManuscriptDetails } from './ManuscriptDetails'

describe('<ManuscriptDetails />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ManuscriptDetails />)
  })
})
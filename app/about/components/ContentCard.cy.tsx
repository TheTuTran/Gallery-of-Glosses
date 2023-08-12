import React from 'react'
import ContentCard from './ContentCard'

describe('<ContentCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ContentCard />)
  })
})
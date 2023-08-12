import React from 'react'
import HistoryCard from './HistoryCard'

describe('<HistoryCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HistoryCard />)
  })
})
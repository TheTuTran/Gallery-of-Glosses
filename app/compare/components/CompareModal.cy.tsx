import React from 'react'
import CompareModal from './CompareModal'

describe('<CompareModal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CompareModal />)
  })
})
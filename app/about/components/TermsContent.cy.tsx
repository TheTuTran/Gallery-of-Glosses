import React from 'react'
import { TermsContent } from './TermsContent'

describe('<TermsContent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TermsContent />)
  })
})
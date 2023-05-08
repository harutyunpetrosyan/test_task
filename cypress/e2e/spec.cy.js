///<reference types="Cypress"/>
import PractisePage from '../pages/PractisePage'

describe('template spec', () => {
  const practisePage = new PractisePage()
  beforeEach(() => {
    practisePage.visit()
  })
  it('Verify drop down', async () => {
    let defaultDropDownText = await practisePage.getDropdownSelectedText(0)
    expect(defaultDropDownText).to.equal('Option1')
    let defaultDropDownTex2 = await practisePage.getDropdownSelectedText(1)
    expect(defaultDropDownTex2).to.equal('Option2')
    let defaultDropDownTex3 = await practisePage.getDropdownSelectedText(2)
    expect(defaultDropDownTex3).to.equal('Option3')
  })
  it('Verify new tab', () => {
    cy.window().then((win) => {
      const openStub = cy.stub(win, 'open');
      practisePage.openNewTabButton.click()
      cy.wrap(openStub).should('have.been.calledWithMatch', /^https?:\/\/(www\.)?easygenerator\.com/);
    });

  })
  it('Verify Invoke an alert/confirmation modal', async () => {
    let name="testName"
    practisePage.fillNameField(name)
    practisePage.alertButton.click()
    let alertText= await practisePage.alert
    expect(alertText).to.contain(name)
    practisePage.fillNameField(name)
    practisePage.confirmButton.click()
    expect(alertText).to.contain(name)
  })
  it('Verify Invoke an alert/confirmation modal', async () => {
    let name="testName"
    practisePage.fillNameField(name)
    practisePage.alertButton.click()
    let alertText= await practisePage.alert
    expect(alertText).to.contain(name)
    practisePage.fillNameField(name)
    practisePage.confirmButton.click()
    expect(alertText).to.contain(name)
  })
  it('Show/hide the input', () => {
    practisePage.HideButton.click()
    practisePage.hideShowField.should('not.be.visible')
    practisePage.ShowButton.click()
    practisePage.hideShowField.should('be.visible')

  })
})
import CalculatorForm from './CalculatorForm'
import { render, screen, fireEvent } from '@testing-library/react'

describe('CalculatorForm', () => {
  const onAppend = jest.fn()
  it('renders number buttons', () => {
    render(<CalculatorForm />)
    for (let i = 0; i <= 9; i++) {
      expect(screen.getByText(i)).toBeTruthy()
    }
  })
  it('renders operation buttons', () => {
    render(<CalculatorForm />)
    expect(screen.getByText('+')).toBeTruthy()
    expect(screen.getByText('-')).toBeTruthy()
    expect(screen.getByText('/')).toBeTruthy()
    expect(screen.getByText('*')).toBeTruthy()
  })
  it('renders equal button', () => {
    render(<CalculatorForm />)
    expect(screen.getByText('=')).toBeTruthy()
  })
  it('calls onAppend when a number button or operation button is clicked', () => {
    render(<CalculatorForm onAppend={onAppend} />)
    const numberButtons = screen.getAllByTestId('number-button')
    numberButtons.forEach(numberButton => {
      fireEvent.click(numberButton)
      const value = numberButton.textContent
      expect(onAppend).toBeCalledWith(value)
    })
  })
})
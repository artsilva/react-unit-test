import { fireEvent, render, screen } from '@testing-library/react'
import Form from './Form'

describe('Form tests', () => {
  beforeEach(() => {
    render(<Form onChange={onChangeMocked} />)
  })

  const onChangeMocked = jest.fn()
  it('should renders titles', () => {
    const title = screen.getByText('Formulario personas')

    expect(title).toBeDefined()
  })

  it('should renders titles inpus', () => {
    const name = screen.getByText('Nombre')
    const last = screen.getByText('Apellido')

    expect(name).toBeDefined()
    expect(last).toBeDefined()
  })

  it('should renders two inpus', () => {
    const input = screen.getAllByRole('textbox')
    const place1 = screen.getByPlaceholderText('Ingrese Nombre')
    const place2 = screen.getByPlaceholderText('Ingrese Apellido')

    expect(input).toHaveLength(2)
    expect(place1).toBeDefined()
    expect(place2).toBeDefined()
  })

  it('should renders button with acaptar text', () => {
    const button = screen.getByText('Aceptar')

    expect(button).toBeDefined()
    expect(button.disabled).toBeTruthy()
  })

  it('should activate button', () => {
    const place1 = screen.getByPlaceholderText('Ingrese Nombre')
    fireEvent.change(place1, { target: { value: 'Arturo' } })

    const place2 = screen.getByPlaceholderText('Ingrese Apellido')
    fireEvent.change(place2, { target: { value: 'silva' } })

    const button = screen.getByText('Aceptar')

    expect(button.disabled).toBeFalsy()
  })

  it('should activate button and when is clicked text should appear', () => {
    const place1 = screen.getByPlaceholderText('Ingrese Nombre')
    fireEvent.change(place1, { target: { value: 'Luis' } })

    const place2 = screen.getByPlaceholderText('Ingrese Apellido')
    fireEvent.change(place2, { target: { value: 'Riveros' } })

    const button = screen.getByText('Aceptar')
    fireEvent.click(button)

    const title = screen.getByText(
      'Estimado Luis Riveros su archivo se subio con exito',
    )

    expect(title).toBeDefined()
    expect(onChangeMocked).toHaveBeenCalledTimes(1)
  })
})

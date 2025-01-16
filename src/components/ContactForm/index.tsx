import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../../redux/actions'
import { v4 as uuidv4 } from 'uuid'
import { RootState } from '../../redux/store'
import { Form, Input, Button, ErrorMessage } from './styles'

function ContactForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const contacts = useSelector((state: RootState) => state.contacts)

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '')
    const match = phoneNumber.match(/^(\d{2})(\d{5})(\d{4})$/)
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`
    }
    return value
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value)
    setPhone(formattedPhone)
  }
  const isDuplicate = (email: string, phone: string) => {
    return contacts.some(
      (contact) => contact.email === email || contact.phone === phone
    )
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (fullName && email && phone) {
      if (isDuplicate(email, phone)) {
        setError('Um contato com este e-mail ou telefone já existe.')
        return
      }
      const newContact = {
        id: uuidv4(),
        fullName,
        email,
        phone
      }
      dispatch(addContact(newContact))
      setFullName('')
      setEmail('')
      setPhone('')
      setError('')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        type="text"
        placeholder="Nome Completo"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={handlePhoneChange}
        required
      />
      <Button type="submit">Adicionar Contato</Button>
    </Form>
  )
}

export default ContactForm

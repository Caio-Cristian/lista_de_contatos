import React, { useState } from 'react'
import { ButtonEdit, ButtonRemove } from './styled'

interface Contact {
  id: string
  fullName: string
  email: string
  phone: string
}

interface ContactItemProps {
  contact: Contact
  onEdit: (id: string, data: Partial<Contact>) => void
  onRemove: (id: string) => void
}

const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  onEdit,
  onRemove
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedContact, setEditedContact] = useState(contact)

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '')
    const match = phoneNumber.match(/^(\d{2})(\d{5})(\d{4})$/)
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`
    }
    return value
  }
  const handleEditClick = () => {
    if (isEditing) {
      onEdit(contact.id, editedContact)
    }
    setIsEditing(!isEditing)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'phone') {
      setEditedContact((prev) => ({
        ...prev,
        [name]: formatPhoneNumber(value)
      }))
    } else {
      setEditedContact((prev) => ({ ...prev, [name]: value }))
    }
  }
  return (
    <div className="contact-item">
      {isEditing ? (
        <>
          <input
            name="fullName"
            value={editedContact.fullName}
            onChange={handleInputChange}
          />
          <input
            name="email"
            value={editedContact.email}
            onChange={handleInputChange}
          />
          <input
            name="phone"
            value={editedContact.phone}
            onChange={handleInputChange}
            placeholder="(99) 99999-9999"
          />
        </>
      ) : (
        <>
          <h3>{contact.fullName}</h3>
          <p>Email: {contact.email}</p>
          <p>Telefone: {formatPhoneNumber(contact.phone)}</p>
        </>
      )}
      <ButtonEdit onClick={handleEditClick}>
        {isEditing ? 'Salvar' : 'Editar'}
      </ButtonEdit>
      <ButtonRemove onClick={() => onRemove(contact.id)}>Remover</ButtonRemove>
    </div>
  )
}

export default ContactItem

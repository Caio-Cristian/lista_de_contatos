import React from 'react'
import ContactItem from '../ContactItem'
import { StyledContactList, Separator } from './styled'

export interface Contact {
  id: string
  fullName: string
  email: string
  phone: string
}

interface ContactListProps {
  contacts: Contact[]
  onEdit: (id: string, data: Partial<Contact>) => void
  onRemove: (id: string) => void
}

const ContactList: React.FC<ContactListProps> = ({
  contacts,
  onEdit,
  onRemove
}) => {
  return (
    <StyledContactList>
      <h2>Lista de Contatos</h2>
      <Separator />
      <ul>
        {contacts.map((contact, index) => (
          <React.Fragment key={contact.id}>
            <ContactItem
              contact={contact}
              onEdit={onEdit}
              onRemove={onRemove}
            />
            {index < contacts.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </ul>
    </StyledContactList>
  )
}

export default ContactList

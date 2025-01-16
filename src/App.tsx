import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import { editContact, removeContact } from './redux/actions'
import { RootState } from './redux/store'
import { Contact } from './components/ContactList'

const App: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts)
  const dispatch = useDispatch()

  const handleEdit = (id: string, data: Partial<Contact>) => {
    const isDuplicate = contacts.some(
      (contact) =>
        (contact.email === data.email || contact.phone === data.phone) &&
        contact.id !== id
    )

    if (isDuplicate) {
      const confirmEdit = window.confirm(
        'Um contato com este e-mail ou telefone já existe. Deseja salvar as alterações mesmo assim?'
      )
      if (!confirmEdit) {
        return
      }
    }

    dispatch(editContact(id, data))
  }

  const handleRemove = (id: string) => {
    dispatch(removeContact(id))
  }

  return (
    <div className="App">
      <h1>Adicionar Contato</h1>
      <ContactForm />
      <ContactList
        contacts={contacts}
        onEdit={handleEdit}
        onRemove={handleRemove}
      />
    </div>
  )
}

export default App

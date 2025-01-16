interface Contact {
  id: string
  fullName: string
  email: string
  phone: string
}

function addContact(contact: Contact) {
  return {
    type: 'ADD_CONTACT',
    payload: contact
  }
}

function removeContact(id: string) {
  return {
    type: 'REMOVE_CONTACT',
    payload: id
  }
}

function editContact(id: string, data: Partial<Contact>) {
  return {
    type: 'EDIT_CONTACT',
    payload: { id, data }
  }
}

export { addContact, removeContact, editContact }

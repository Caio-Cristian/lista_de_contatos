interface Contact {
  id: string
  fullName: string
  email: string
  phone: string
}

interface AddContactAction {
  type: 'ADD_CONTACT'
  payload: Contact
}

interface RemoveContactAction {
  type: 'REMOVE_CONTACT'
  payload: string
}

interface EditContactAction {
  type: 'EDIT_CONTACT'
  payload: {
    id: string
    data: Partial<Contact>
  }
}

type Action = AddContactAction | RemoveContactAction | EditContactAction
const initialState: Contact[] = []

function contactsReducer(state = initialState, action: Action): Contact[] {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, action.payload]
    case 'REMOVE_CONTACT':
      return state.filter((contact) => contact.id !== action.payload)
    case 'EDIT_CONTACT':
      return state.map((contact) =>
        contact.id === action.payload.id
          ? { ...contact, ...action.payload.data }
          : contact
      )
    default:
      return state
  }
}

export default contactsReducer

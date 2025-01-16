import { createStore, combineReducers } from 'redux'
import contactsReducer from './reducers'

const rootReducer = combineReducers({
  contacts: contactsReducer
})

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer> // Adicione esta linha para exportar o tipo RootState
export default store

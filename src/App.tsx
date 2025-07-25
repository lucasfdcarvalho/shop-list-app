import './App.scss'
import { ShoppingListProvider } from './providers/ShoppingListProvider'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

function App() {

  return (
    <ShoppingListProvider>
      <RouterProvider router={routes}/>
    </ShoppingListProvider>
  )
}

export default App

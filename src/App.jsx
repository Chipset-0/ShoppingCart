import { StrictMode, useEffect, useState, useMemo} from 'react'
import './App.css'
import getAllItems from './Fetching/Fetcher.js'
import Store from './Components/Store/Store.jsx'
import { RouterProvider } from 'react-router-dom'
import routerFactory from "./Routing/Router.jsx"
import Navbar from './Components/NavBar/Navbar.jsx'


function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  const router = useMemo(() => routerFactory({itemList: items, setItemList: setItems}))

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const fetchedItems = await getAllItems()
      
        setItems(fetchedItems);
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false);
      }

      setTimeout(() => {
          console.log("Items state 100ms later:", items);
      }, 100);

    };

    fetchItems();
  }, [])


  if (loading) return <div>Loading Pokemon items...</div>;
  if (error) return <div>Error loading items: {error}</div>;

  return (
    <>
      <link href="https://fonts.cdnfonts.com/css/orange-kid" rel="stylesheet"></link>
      <StrictMode>
        <RouterProvider router={router}>
        </RouterProvider>
      </StrictMode>
    </>
  )
}

export default App

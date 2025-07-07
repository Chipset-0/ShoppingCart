import { useEffect, useState } from 'react'
import './App.css'
import ItemList from './Components/Store/ItemList'
import getAllItems from './Fetching/Fetcher.js'

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

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
    };

    fetchItems();
  }, [])


  if (loading) return <div>Loading Pokemon items...</div>;
  if (error) return <div>Error loading items: {error}</div>;

  return (
    <>
      <ItemList itemList={items} updateItemList={setItems}/>
    </>
  )
}

export default App

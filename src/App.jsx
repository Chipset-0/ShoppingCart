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
      
        console.log("getAllItems() returned:", fetchedItems);
        console.log("Type of fetchedItems:", typeof fetchedItems);
        console.log("Is array?", Array.isArray(fetchedItems));
        console.log("Length:", fetchedItems?.length);
        setItems(fetchedItems);
        console.log("Called setItems with:", fetchedItems);
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
      <ItemList itemList={items} updateItemList={setItems}/>
    </>
  )
}

export default App

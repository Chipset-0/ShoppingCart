const shopItems = {
  ball: [
    "poke-ball",
    "great-ball",
    "ultra-ball",
    "heal-ball",
    "net-ball",
    "repeat-ball",
    "nest-ball",
    "luxury-ball",
    "dive-ball",
    "quick-ball",
    "dusk-ball",
    "timer-ball"
  ],
  potion: [
    "potion",
    "super-potion",
    "hyper-potion",
    "max-potion",
    "full-restore"
  ],
  status: [
    "antidote",
    "burn-heal",
    "ice-heal",
    "awakening",
    "paralyze-heal",
    "full-heal",
    "revive"
  ],
  item: [
    "poke-doll",
    "repel",
    "super-repel",
    "max-repel",
    "escape-rope"
  ]
};

const API_URL = "https://pokeapi.co/api/v2/item/";

function Capitalise(s)
{
    var returnVal = ""
    const splitS = s.split('-')
    for (const word of splitS)
    {
      returnVal = returnVal + (word[0].toUpperCase() + word.slice(1).toLowerCase()) + " ";
    }
    return returnVal.slice(0, returnVal.length-1);
}

async function getItem(name, category) {
    try {
        const fetchRequest = API_URL + name;
        const response = await fetch(fetchRequest, { mode: "cors" });
        
        if (!response.ok) {
            throw new Error(`Server Error: ${response.status}`);
        }
        
        const data = await response.json();
        // Create and return the item object
        const item = {
            id: data.id,
            name: Capitalise(data.name),
            description: data.flavor_text_entries[0].text.replace(/(\r\n|\n|\r)/gm, " "),
            cost: data.cost,
            imageUrl: data.sprites.default,
            quantity: 0,
            category: category
        };
        
        return item;
    } catch (error) {
        console.error("Error fetching item:", error);
        return null; // Return null on error
    }
}

export default async function getAllItems() {
    const allPromises = [];
    
    // Create promises for all categories
    for (const [category, itemNames] of Object.entries(shopItems)) {
        const categoryPromises = itemNames.map(itemName => 
            getItem(itemName, category)
        );
        allPromises.push(...categoryPromises);
    }
    
    // Wait for all items to be fetched
    const items = await Promise.all(allPromises);
    
    // Filter out any null results (failed fetches)
    const filtered = items.filter(item => item !== null);
    
    return filtered;
}
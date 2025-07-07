export default function ItemFactory(name, category, cost, 
                                    description, imageUrl, quantity) {
    return {
        name: name,
        category: category,
        cost: cost,
        description: description,
        imageUrl: imageUrl,
        quantity: quantity
    };
}
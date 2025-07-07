export default function ItemFactory(name, category, cost, description, imageUrl, quantity) {
    return {
        name,
        category,
        cost,
        description,
        imageUrl,
        quantity
    };
}
import { categories } from '../redux/constants'
import { useOyatsuSelector } from '../hooks/useOyatsuSelector'

import Card from '../components/Card'

const DrinkInventory = () => {
    const { oyatsuData, handleQuantity } = useOyatsuSelector(categories.drinks)

    return (
        <>
            <h1 className='mt-8'>Drink Department</h1>
            <div className="grid grid-cols-4 gap-4">
                {oyatsuData && oyatsuData.length > 0 && oyatsuData.map((drink) => (
                    <Card
                        key={drink.id}
                        item={drink}
                        handleQuantity={handleQuantity}
                    />
                ))}
            </div>
        </>
    )
}

export default DrinkInventory


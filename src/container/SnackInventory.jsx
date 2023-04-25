import { categories } from '../redux/constants'
import { useOyatsuSelector } from '../hooks/useOyatsuSelector'

import Card from '../components/Card'

const SnackInventory = () => {
    const { oyatsuData, handleQuantity } = useOyatsuSelector(categories.snacks)
    return (
        <>
            <h1 className='mt-8'>Snack Department</h1>
            <div className="grid grid-cols-4 gap-4">
                {oyatsuData && oyatsuData.length > 0 && oyatsuData.map((snack) => (
                    <Card
                        key={snack.id}
                        item={snack}
                        handleQuantity={handleQuantity}
                    />
                ))}
            </div>
        </>
    )
}

export default SnackInventory



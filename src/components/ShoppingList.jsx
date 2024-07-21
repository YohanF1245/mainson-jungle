import { plantList } from '../datas/PlantList.jsx'
import PlantItem from './PlantItem.jsx'
import '../styles/ShoppingList.css'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    function handleSubmit(e) {
        e.preventDefault()
        alert(e.target['my_input'].value)
    }
	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item' onClick={() => alert(plant.name)}>
						<PlantItem { ...plant } />
					</li>
				))}
			</ul>
            <form onSubmit={handleSubmit}>
    <input type='text' name='my_input' defaultValue='Tapez votre texte' />
    <button type='submit'>Entrer</button>
</form>
		</div>
	)
}

export default ShoppingList
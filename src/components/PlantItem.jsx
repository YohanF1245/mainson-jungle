import '../styles/PlantItem.css'
import CareScale from './CareScale.jsx'

function PlantItem({ cover, name, water, light, price, id }) {
    return (
        <li className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
    )
}

export default PlantItem
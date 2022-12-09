import React, { useRef, useState } from 'react'
import papaya from './papaya.png'
import calquat from './calquat.png'
import mahogany from './mahogany.png'
import PlantList from './PlantList'
import Time from './Time'

export default function FarmingItem() {
const plantTypeInput = useRef()
const growthTimeInput = useRef()

const [plant, setPlant] = useState([])

const preSetInput = (plant, h) => {
  plantTypeInput.current.value = plant
  growthTimeInput.current.value = h
}

const addPlant = () => {
  const plantType = plantTypeInput.current.value
  const growthTime = growthTimeInput.current.value
  if (plantType === '' || growthTime === '' || growthTime <= 0) return

  setPlant(prevPlant => {
    return [...prevPlant, {id: Math.random(), name: plantType, grown: false, growthTime: growthTime}] //Znamena ze nase pole ktore mame v usestate zaeviduje a a doplni pomocou spread operatora novy objekt do pola
  })

  plantTypeInput.current.value = null 
  growthTimeInput.current.value = null
}

  return (
    <>
    <div className='farming-component'>
        <Time />
        <label>Farming: </label>
        <input id='plant-type-input' type='text' placeholder='Type of plant' ref={plantTypeInput}/>
        <input id='plant-growth-time-input' type='number' placeholder='Growth time in h' ref={growthTimeInput}/>
        <button className='plant-button' onClick={addPlant}>Plant</button> <br/>
        <button onClick={()=> preSetInput('Papaya tree', 16)} id='papaya-button'><img src={papaya} alt='papaya tree' width='20' height='20' title='papaya tree'></img></button>
        <button onClick={()=> preSetInput('Calquat tree', 21)} id='calquat-button'><img src={calquat} alt='calquat tree' width='20' height='20' title='calquat tree'></img> </button>
        <button onClick={()=> preSetInput('Mahogany tree', 85)} id='mahogany-button'><img src={mahogany} alt='mahogany tree' width='20' height='20' title='mahogany tree'></img></button>
        <PlantList plants={plant} test={'date'}/>
    </div>
    </>
  )

}
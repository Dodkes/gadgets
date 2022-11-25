import React, { useRef } from 'react'
import papaya from './papaya.png'
import calquat from './calquat.png'
import mahogany from './mahogany.png'


export default function FarmingItem() {

const plantTypeInput = useRef()
const growthTimeInput = useRef()

const preSetInput = (plant, h) => {
  plantTypeInput.current.value = plant
  growthTimeInput.current.value = h
}

  return (
    <div className='farming-component'>
        <label>Farming: </label>
        <input id='plant-type-input' type='text' placeholder='Type of plant' ref={plantTypeInput}/>
        <input id='plant-growth-time-input' type='number' placeholder='Growth time in h' ref={growthTimeInput}/>
        <button className='plant-button'>Plant</button> <br/>
        <button onClick={()=> preSetInput('Papaya tree', 16)} id='papaya-button'><img src={papaya} alt='papaya tree' width='20' height='20' title='papaya tree'></img></button>
        <button onClick={()=> preSetInput('Calquat tree', 21)} id='calquat-button'><img src={calquat} alt='calquat tree' width='20' height='20' title='calquat tree'></img> </button>
        <button onClick={()=> preSetInput('Mahogany tree', 85)} id='mahogany-button'><img src={mahogany} alt='mahogany tree' width='20' height='20' title='mahogany tree'></img></button>
    </div>
  )

}
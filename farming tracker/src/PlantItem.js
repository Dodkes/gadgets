export default function PlantItem({plant, plants, updatePlant, time}) {

//Tu mam loop cez vsetky plantnute itemy a tento loop bude prebiehat kazdy redner - stacilo by aj kazdu hodinu a prvotne pri nacitani cize 1. render
// for (let x in plants) {
//   console.log(plants[x].plantedTime)
//   console.log(plants[x].growthTime)
// }


// let days = Number(plants[1].growthTime) / 24
// let hours = plants[1].growthTime % 24
// console.log(Math.floor(days))
// console.log(hours)

const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

console.log(plants[0].plantedTime)








function clearPlant () {
  let newPlants = [...plants]
  for (let x in plants) {
    if (plants[x].id === plant.id) {
      newPlants.splice(x, 1)
      updatePlant(newPlants)
    }
  }
}

  return (
    <>
    <div className="item">{plant.name}<span className="left-time"> - left h: </span><span>pre zobrazenie casu pouzit metody</span><button className="myButton" onClick={()=> clearPlant()}>Clear</button></div>
    </>
  )
}

//Pridat property cieloveho casu pre objekt a nasledne z neho renderovat
//Bude to checkovat s realnym casom a ked budu hodiny, minuty vacsie alebo rovne ako cielovy cas tak oznaci zelenou
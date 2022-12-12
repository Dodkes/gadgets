export default function PlantItem({plant, plants}) {
function clearPlant () {
  for (let x in plants) {

    if (plants[x].id === plant.id) {
      plants.splice(x, 1)
      let newPlantsArray = plants
      console.log(newPlantsArray)
    }
  }

}

  return (
    <>
    <div className="item">{plant.name}<button className="myButton" onClick={()=> clearPlant()}>Clear</button></div>
    </>
  )
}
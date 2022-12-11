export default function PlantItem({plant, test}) {
  return (
    <>
    <div className="item">{plant.name}{test}<button className="myButton">Clear</button></div>
    </>
  )
}
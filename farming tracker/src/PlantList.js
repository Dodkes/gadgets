import PlantItem from "./PlantItem"

export default function PlantList({plant, updatePlant, time}) {
  return (
    plant.map(plantItem => {return <PlantItem key={plantItem.id} plant={plantItem} plants={plant} updatePlant={updatePlant} time={time}/>})) //pre kazdy item v usestate nam vrati 1 komponent, kde ako props posleme nazov, key znamena ze sme zadali specificky key pre kazdy element takze react renderuje vzdy len ten komponent ktory sa zmenil
}

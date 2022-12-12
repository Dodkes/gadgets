import PlantItem from "./PlantItem"

export default function PlantList({plants}) {
  return (
    plants.map(plantItem => {return <PlantItem key={plantItem.id} plant={plantItem} plants={plants}/>})) //pre kazdy item v usestate nam vrati 1 komponent, kde ako props posleme nazov, key znamena ze sme zadali specificky key pre kazdy element takze react renderuje vzdy len ten komponent ktory sa zmenil
}

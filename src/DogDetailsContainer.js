import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

function DogDetailsContainer({dogs}){
  //console.log("dogs", dogs)
  const { name } = useParams()
  const thisDog = dogs.filter(dog => dog.src === name)[0];
  return(
    <DogDetails thisDog={thisDog}/>
  )
}

export default DogDetailsContainer
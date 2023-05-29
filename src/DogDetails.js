import { useParams } from "react-router-dom";


function DogDetails({ thisDog }) {
  // const { name } = useParams();
  // console.log("dogs: ", dogs);//
  //console.log("dog: ", thisDog);//
  // console.log("name: ", name);
  // const thisDog = dogs.filter(dog => dog.src === name)[0];
  function generateDogMarkup() {
    return (
      <div>
        <h1>{thisDog.name}</h1>
        <p>{thisDog.name} is {thisDog.age} years old</p>
        <img src={`/${thisDog.src}.jpg`} alt={thisDog.name} />
        <ul>
          {thisDog.facts.map((fact, idx) => <li key={idx}>{fact}</li>)}
        </ul>
      </div>
    );
  }

  // const dogName = thisDog.name;
  // const dogAge = thisDog.age;
  // const dogImagePath = thisDog.src;
  // const dogFacts = thisDog.name;

  return (
    generateDogMarkup()
  );
}

export default DogDetails;
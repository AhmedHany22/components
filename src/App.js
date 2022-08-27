import "semantic-ui-css/semantic.min.css";
import { faker } from "@faker-js/faker";
import Card from "./card";

function App() {
  return (
    <div className="ui container comments" style={{ marginTop: "3%" }}>
      <Card author={faker.name.firstName()} post={faker.lorem.words()} />
      <Card author={faker.name.firstName()} post={faker.lorem.words()} />
      <Card author={faker.name.firstName()} post={faker.lorem.words()} />
      <Card author={faker.name.firstName()} post={faker.lorem.words()} />
      <Card author={faker.name.firstName()} post={faker.lorem.words()} />
    </div>
  );
}

export default App;

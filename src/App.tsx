import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  const items = ["Bro", "We", "OO", "Let's go baby"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} onSelectItem={handleSelectItem} />
      <Button />
    </div>
  );
}

export default App;

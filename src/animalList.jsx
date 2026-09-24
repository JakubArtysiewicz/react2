import Animal from "./animal";
function AnimalList() {
  return (
    <div>
        <Animal imie="Mruczek" gatunek="Dachowiec"/>
        <Animal imie="Burek" gatunek="Pies" wiek= "20"/>
        <Animal imie="Marek" gatunek="Chomik" wiek= "30"/>
    </div>
  );
}

export default AnimalList;
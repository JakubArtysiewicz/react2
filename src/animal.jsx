function Animal({imie,gatunek, wiek = 1}) {
  return (
    <h2>Poznaj: {imie} gatunek: {gatunek} Wiek: {wiek} </h2>
  );
}

export default Animal;
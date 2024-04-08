function Introduction(props) {
  return (
    <div>
      <h1>Hallo!</h1>
      <p>Perkenalkan Nama saya : {props.name}</p>
    </div>
  );
}

function Components() {
  return (
    <div>
      <h1>Ini merupakan Pembelajaran Awal saya</h1>
      <Introduction name="David Gurning" />
      <Introduction name="Ariel Tatum" />
    </div>
  );
}

export default Components;

// UI variables
const input = document.getElementById("searchChar");

// Event Listeners
input.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    let response = fetch(
      `https://rickandmortyapi.com/api/character/?name=${userText}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
});

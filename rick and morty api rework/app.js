// UI variables
const input = document.getElementById("searchChar");

var mydata = "";
function getData(data) {
  mydata = data;
  return mydata;
}

// Event Listeners
input.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    let response = fetch(
      `https://rickandmortyapi.com/api/character/?name=${userText}`
    )
      .then((res) => res.json())
      .then((data) => getData(data));
  }
  // Loop through each result
  let list = mydata.results;
  list.forEach((char) => {
    console.log(char.name);
  });
});

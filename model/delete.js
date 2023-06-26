export function deleteCard() {
  let data = JSON.parse(sessionStorage.getItem("data")) || [];

  const newData = JSON.parse(localStorage.getItem("clickedCardData"));

  const index = newData.index - 1;

  if (confirm("Are you sure you want to delete this entry?")) {
    data.splice(index, 1);

    sessionStorage.setItem("data", JSON.stringify(data));

    window.location.replace("#/");
  }
}

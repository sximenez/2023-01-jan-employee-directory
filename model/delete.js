export function deleteCard() {
  let data = JSON.parse(sessionStorage.getItem("data")) || [];

  const newData = JSON.parse(localStorage.getItem("clickedCardData"));

  const index = newData.index - 1;

  data.splice(index, 1);

  sessionStorage.setItem("data", JSON.stringify(data));

  window.location.replace("#/");
}

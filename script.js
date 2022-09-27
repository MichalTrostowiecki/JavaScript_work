/*jshint esversion: 8 */
const img = document.querySelector("img");

async function getCats() {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=YN2xoWfsQ3CjewKOD7Tq0bXSpc1m8TB3&s=cats",
    { mode: "cors" }
  );
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}
getCats();

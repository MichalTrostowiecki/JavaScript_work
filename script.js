/*jshint esversion: 6 */
const img = document.querySelector("img");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=YN2xoWfsQ3CjewKOD7Tq0bXSpc1m8TB3&s=cats",
  { mode: "cors" }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    link = response.data.images.original.url;
    img.src = link;
  });

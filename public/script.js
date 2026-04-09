async function scrape() {
  const url = document.getElementById("url").value;

  const res = await fetch(`/scrape?url=${url}`);
  const data = await res.json();

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (data.images) {
    data.images.forEach(img => {
      const image = document.createElement("img");
      image.src = img;
      image.width = 150;
      resultDiv.appendChild(image);
    });
  } else {
    resultDiv.innerHTML = "Error: " + data.error;
  }
}

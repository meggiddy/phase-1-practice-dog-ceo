window.addEventListener("DOMContentLoaded", (event) => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const imgDiv = document.getElementById("dog-image-container");
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      data.message.forEach((imgUrl) => {
        const img = document.createElement("img");
        img.setAttribute("src", imgUrl);
        imgDiv.appendChild(img);
      });
      //Filtering Breeds by first letter
      fetch("https://dog.ceo/api/breeds/list")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // data.message is an array of all available breeds
          const breedList = data.message;
          const dropDown = document.getElementById("breed-dropdown");
          breedList.forEach((breed) => {
            const option = document.createElement("option");
            option.value = breed;
            option.innerHTML = breed;
            dropDown.appendChild(option);
          });
          dropDown.addEventListener("change", (event) => {
            const selectedBreed = event.target.value;
            const imgUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random/4`;
            fetch(imgUrl)
              .then((response) => response.json())
              .then((data) => {
                const imgDiv = document.getElementById("dog-image-container");
                while (imgDiv.firstChild) {
                  imgDiv.removeChild(imgDiv.firstChild);
                }
                const imageUrls = data.message;
                imageUrls.forEach((url) => {
                  const img = document.createElement("img");
                  img.src = url;
                  imgDiv.appendChild(img);
                });
              });
          });
        });
    });
});

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
          // data.message is an array of all available breeds
          const breedList = data.message;
          const dropDown = document.getElementById("breed-dropdown");
          breedList.forEach((breed) => {
            const listItem = document.createElement("li");
            const dogList = document.getElementById("dog-breeds");
            const dropDown = document.getElementById("breed-dropdown");
            //filter with first letter
            breedList.forEach((breed) => {
              const firstOption = document.getElementsByTagName("option");
              if (breed.charAt(0) === firstOption.value) {
                const img = document.createElement("img");
                const imgDiv = document.getElementById("dog-image-container");
                    img.src = `https://dog.ceo/api/breed/${breed}/images/random`;
                    imgDiv.appendChild(img);
                    dogList.appendChild(img);
                listItem.innerHTML = breed;
                //dogList.removeChild(listItem);
                dogList.appendChild(listItem);
              }
            });
            listItem.innerHTML = breed;
            dogList.appendChild(listItem);
          });
        });
    });
});

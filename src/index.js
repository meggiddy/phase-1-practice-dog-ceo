window.addEventListener("DOMContentLoaded", (event) => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list";
  const imgDiv = document.getElementById("dog-image-container");
  const dogList = document.getElementById("dog-breeds");
  const dogSelector = document.getElementById("breed-dropdown");
  let allBreeds = [];

  const getBreeds = () => {
    return fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        allBreeds = data.message;
        return allBreeds;
      });
  };

  const displayBreeds = (breeds) => {
    dogList.innerHTML = "";
    breeds.forEach((dog) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = dog;
      dogList.appendChild(listItem);
    });
  };

  const fetchImages = () => {
    return fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        data.message.forEach((imgUrl) => {
          const img = document.createElement("img");
          img.setAttribute("src", imgUrl);
          imgDiv.appendChild(img);
        });
      });
  };

  //Filtering Breeds by first letter
  dogSelector.addEventListener("change", (event) => {
    const firstLetterToFilter = event.target.value;
    const filteredBreeds = allBreeds.filter(
      (dog) => firstLetterToFilter === dog.charAt(0)
    );
    displayBreeds(filteredBreeds);
  });

  getBreeds().then((breeds) => displayBreeds(breeds));
  fetchImages();
});

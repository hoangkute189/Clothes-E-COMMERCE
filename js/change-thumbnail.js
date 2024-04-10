changeThumbnail()

function changeThumbnail() {
  var mainThumbnail = document.querySelector(".card-thumbnail .main-thumbnail");
  var subItem = document.querySelectorAll(".sub-thumbnail .sub-item");

  subItem.forEach((element) => {
    element.addEventListener("click", () => {
      // Get sub-item with have 'active' class
      var subItemActive = document.querySelector(
        ".sub-thumbnail .sub-item.active"
      );

      // Change class 'active' for the element clicked
      subItemActive.classList.remove("active");
      element.classList.add("active");

      // Change thumbnail that suitable with the element clicked
      var imgElement = element.querySelector("img");
      mainThumbnail.querySelector("img").remove()
      mainThumbnail.append(imgElement.cloneNode(true))
    });
  });
}

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
 
    const fullSrc = item.src.replace("-thumbnail", "");
    lightboxImage.src = fullSrc;

    lightbox.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
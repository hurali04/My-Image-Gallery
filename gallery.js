document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".galleryImage");
  let currentIndex = 0;

  const modal = document.getElementById("imageModal");
  const fullImage = document.getElementById("fullImage");
  const closeModal = document.getElementById("closeModal");
  const prevModalBtn = document.getElementById("prevModalBtn");
  const nextModalBtn = document.getElementById("nextModalBtn");

  function openModal(img) {
    currentIndex = Array.from(images).indexOf(img);
    fullImage.src = img.src;
    modal.style.display = "flex";
  }

  function updateModalImage(index) {
    fullImage.src = images[index].src;
  }

  prevModalBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateModalImage(currentIndex);
  });

  nextModalBtn.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateModalImage(currentIndex);
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  images.forEach((img) => {
    img.addEventListener("click", () => {
      openModal(img);
    });
  });
});

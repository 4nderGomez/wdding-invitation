export function initGalleryModal() {
    const images = document.querySelectorAll(".gallery-track img");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const overlay = document.querySelector(".image-modal-overlay");

    if(!images || !modal) return;

    images.forEach(img => {
        img.addEventListener("click", () => {
            modal.classList.add("active");
            modalImg.src = img.src;
            document.body.style.overflow = "hidden";
        });
    });

    overlay.addEventListener("click", () => {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    });
}
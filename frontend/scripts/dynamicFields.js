export function initDynamicFields() {
    const container = document.getElementById("guestsContainer");
    const addAdultBtn = document.getElementById("addAdult");
    const addKidBtn = document.getElementById("addKid");

    if(!container) return;

    let adultCount = 1;
    let kidCount = 0;

    addAdultBtn.addEventListener("click", () => {
        adultCount++;

        const field = document.createElement("div");
        field.classList.add("person-row");
        field.dataset.type = "adult"

        field.innerHTML = `
            <span class="bullet"></span>
            <input type="text" placeholder="Nombre adulto ${adultCount}" required>
            <input type="text" placeholder="Apellido adulto ${adultCount}" required>
        `;

        container.appendChild(field);
    });

    addKidBtn.addEventListener("click", () => {
        kidCount++;

        const field = document.createElement("div");
        field.classList.add("person-row");
        field.dataset.type = "kid";

        field.innerHTML = `
            <span class="bullet"></span>
            <input type="text" placeholder="Nombre niño ${kidCount}" required>
            <input type="text" placeholder="Apellido niño ${kidCount}" required>
        `;

        container.appendChild(field);
    });
}
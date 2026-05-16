export function initDynamicFields() {
    const container = document.getElementById("guestsContainer");
    const addAdultBtn = document.getElementById("addAdult");
    const addKidBtn = document.getElementById("addKid");

    if(!container || !addAdultBtn || !addKidBtn) return;

    let adultCount = 0;
    let kidCount = 0;

    addAdultBtn.addEventListener("click", () => {
        adultCount++;

        const field = document.createElement("div");
        field.classList.add("guest-card");
        field.dataset.type = "adult"

        field.innerHTML = `
            <div class="guest-card-header">
                <span class="guest-tag adult-tag">
                    Acompañante adulto · ${adultCount}
                </span>
            </div>

            <div class="guest-inputs">
                <input
                    type="text"
                    placeholder="Nombre completo"
                    required
                >

                <input
                    type="text"
                    placeholder="Apellido"
                    required
                >
            </div>
        `;

        container.appendChild(field);
    });

    addKidBtn.addEventListener("click", () => {
        kidCount++;

        const field = document.createElement("div");
        field.classList.add("guest-card");
        field.dataset.type = "kid";

        field.innerHTML = `
            <div class="guest-card-header">
                <span class="guest-tag kid-tag">
                    Acompañante niño ·${kidCount}
                </span>
            </div>

            <div class="guest-inputs">
                <input
                    type="text"
                    placeholder="Nombre completo"
                    required
                >

                <input
                    type="text"
                    placeholder="Apellido"
                    required
                >
            </div>
        `;

        container.appendChild(field);
    });
}
export function initModal() {
    const decisionBtn = document.getElementById("confirmDecisionBtn");
    const decision = document.getElementById("attendanceDecision");

    const modal = document.getElementById("formModal");

    const declineSection = document.getElementById("declineSection");
    const decisionBlock = document.getElementById("rsvp-decision");

    const backBtn = document.getElementById("backToDecision");
    const calendar = document.querySelector(".calendar-card");
    const closeBtn = document.getElementById("closeModal");

    //Cerrar modal
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    })

    modal.addEventListener("click", (e) => {
        if(e.target == modal) {
            modal.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });

    //Boton principal
    decisionBtn.addEventListener("click", (e) => {
        e.preventDefault();

        if(decision.value === "yes") {
            modal.classList.add("active");
            document.body.style.overflow = "hidden";

            //Iluminación del calendario
            calendar.classList.add("active-confirmed");
        }

        if(decision.value === "no") {
            decisionBlock.classList.add("hidden");
            declineSection.classList.remove("hidden");
        }
    });

    //Regresar
    backBtn.addEventListener("click", () => {
        declineSection.classList.add("hidden");
        decisionBlock.classList.remove("hidden");
    });
}
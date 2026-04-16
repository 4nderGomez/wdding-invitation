export function initModal() {
    const decisionBtn = document.getElementById("confirmDecisionBtn");
    const decision = document.getElementById("attendanceDecision");

    const modal = document.getElementById("formModal");
    const declineSection = document.getElementById("declineSection");

    const closeBtn = document.getElementById("closeModal");

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    })

    modal.addEventListener("click", (e) => {
        if(e.target == modal) {
            modal.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    })

    decisionBtn.addEventListener("click", (e) => {
        e.preventDefault();

        if(decision.value === "yes") {
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        }

        if(decision.value === "no") {
            declineSection.classList.remove("hidden");
        }
    })
}
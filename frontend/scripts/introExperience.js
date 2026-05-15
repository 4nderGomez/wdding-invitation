export function initIntroExperience() {
    const intro = document.getElementById("introScreen");
    const enterBtn = document.getElementById("enterExperience");
    const music = document.getElementById("backgroundMusic");

    if(!intro || !enterBtn || !music) return;

    music.volume = 0.4;
    music.loop = true;

    enterBtn.addEventListener("click", async() => {
        try {
            await music.play();
        } catch(erro) {
            console.log("El navegador bloqueó la música");
        }

        intro.classList.add("hide");
        document.body.style.overflow = "auto";
    });
}
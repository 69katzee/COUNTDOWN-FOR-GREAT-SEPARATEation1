// ==========================================
// THE GREAT SEPARATION I
// Countdown Engine
// ==========================================


document.addEventListener("DOMContentLoaded", () => {


    const startDate = CONFIG.startDate;
    const endDate = CONFIG.endDate;


    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    const progressFill = document.getElementById("progress-fill");
    const progressText = document.getElementById("progress-text");

    const daysTogether = document.getElementById("days-together");



    function updateCountdown(){


        // IMPORTANT: Create now first
        const now = new Date();



        // ======================
        // Countdown
        // ======================

        let distance = endDate - now;



        if(distance < 0){
            distance = 0;
        }



        const d = Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );


        const h = Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            /(1000 * 60 * 60)
        );


        const m = Math.floor(
            (distance % (1000 * 60 * 60))
            /(1000 * 60)
        );


        const s = Math.floor(
            (distance % (1000 * 60))
            /1000
        );



        days.textContent =
        String(d).padStart(3,"0");


        hours.textContent =
        String(h).padStart(2,"0");


        minutes.textContent =
        String(m).padStart(2,"0");


        seconds.textContent =
        String(s).padStart(2,"0");



        // ======================
        // Progress From 1 Jan
        // ======================


        const totalTime =
        endDate - startDate;


        const passedTime =
        now - startDate;



        let progress =
        (passedTime / totalTime) * 100;



        progress = Math.max(
            0,
            Math.min(progress,100)
        );



        progressFill.style.width =
        progress + "%";


        progressText.textContent =
        progress.toFixed(2) + "% Completed";



        // ======================
        // Days Together
        // ======================


        if(daysTogether){

            let together =
            Math.floor(
                passedTime /
                (1000*60*60*24)
            );


            daysTogether.textContent =
            String(together).padStart(3,"0");

        }


    }



    updateCountdown();


    setInterval(updateCountdown,1000);



});

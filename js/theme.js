(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    // Define the target date: 17th December of the current year
    let today = new Date(),
        yyyy = today.getFullYear(),
        targetDate = `12/17/${yyyy}`;

    // Convert the target date to a timestamp
    const countDown = new Date(targetDate).getTime();

    // Run the countdown
    const x = setInterval(function () {
        const now = new Date().getTime(),
            distance = countDown - now;

        // Update the countdown elements
        document.getElementById("days").innerText = Math.floor(distance / day);
        document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
        document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
        document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

        // Handle when the countdown ends
        if (distance < 0) {
            document.getElementById("countdown").style.display = "none";
            clearInterval(x);
        }
    }, 1000); // Update every second
})();

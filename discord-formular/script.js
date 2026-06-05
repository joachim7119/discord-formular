document.getElementById("btn_sig").addEventListener("click", async (e) => {
    e.preventDefault();

    const feld1 = document.getElementById("feld1").value;
    const feld2 = document.getElementById("feld2").value;

    try {
        const response = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                feld1,
                feld2
            })
        });

        if (response.ok) {
            console.log("Gesendet");
        } else {
            console.error("Fehler beim Senden");
        }
    } catch (error) {
        console.error(error);
    }
});

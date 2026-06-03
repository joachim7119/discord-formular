export default async function handler(req, res) {

    if (req.method !== "POST") {
      return res.status(405).send("Nur POST erlaubt");
    }
  
    const { feld1, feld2 } = req.body;
  
    try {
  
      await fetch(process.env.DISCORD_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          content:
  `Neue Nachricht:
  
  Feld 1: ${feld1}
  Feld 2: ${feld2}`
        })
      });
  
      res.status(200).send("OK");
  
    } catch (error) {
  
      console.log(error);
      res.status(500).send("Fehler");
  
    }
  }
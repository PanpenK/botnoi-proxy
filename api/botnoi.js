export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  const response = await fetch("https://voice.botnoi.ai/openapi/v1/generate_audio_v2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "botnoi-token": process.env.BOTNOI_TOKEN,
    },
    body: JSON.stringify(req.body),
  });

  const data = await response.json();
  res.status(response.status).json(data);
}

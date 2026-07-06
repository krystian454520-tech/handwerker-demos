export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { firma, zeit, geraet } = req.body;

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'onboarding@resend.dev',
      to: 'krystian454520@gmail.com',           // ← deine E-Mail hier
      subject: `📱 QR-Scan: ${firma}`,
      text: `Firma: ${firma}\nZeit: ${zeit}\nGerät: ${geraet}`
    })
  });

  res.status(200).json({ ok: true });
}

// Triggered automatically by Netlify when a form submission is received.
// Writes the company name and website domain to Supabase.

exports.handler = async function (event) {
  const { SUPABASE_URL, SUPABASE_SERVICE_KEY } = process.env;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    console.log("Supabase env vars not set, skipping.");
    return { statusCode: 200, body: "Skipped — no Supabase config" };
  }

  let payload;
  try {
    payload = JSON.parse(event.body).payload;
  } catch (e) {
    return { statusCode: 400, body: "Invalid payload" };
  }

  const companyName = payload.data.company || "";
  const domain = payload.data.website || "";

  if (!companyName) {
    return { statusCode: 200, body: "No company name provided" };
  }

  const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      company_name: companyName,
      domain: domain,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Supabase insert failed:", err);
    return { statusCode: 500, body: err };
  }

  return { statusCode: 200, body: "Lead saved" };
};

import fetch from 'node-fetch';

export default defineEventHandler(async (event) => {
  const url = 'https://cdn.gtranslate.net/widgets/latest/float.js'; // GTranslate script URL
  const res = await fetch(url);
  const body = await res.text();

  // Return the GTranslate script as a response
  return new Response(body, {
    status: res.status,
    headers: {
      'Content-Type': 'application/javascript',
    },
  });
});

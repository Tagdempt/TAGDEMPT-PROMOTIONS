export function GET() {
  return new Response(
    "google-site-verification: googleb3b66a01545fb019.html",
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
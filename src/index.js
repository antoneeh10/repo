export default {
  async fetch(request) {
    return new Response(
      JSON.stringify({ status: "worker hidup wak 🗿" }),
      {
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*"
        }
      }
    )
  }
}

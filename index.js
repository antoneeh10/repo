export default {
  async fetch(request) {
    return new Response(
      JSON.stringify({ status: "worker nyala wak 🗿" }),
      {
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*"
        }
      }
    )
  }
}
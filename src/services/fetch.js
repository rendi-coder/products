export const GET = "GET";
export const POST = "POST";
export const DELETE = "DELETE";
export const PUT = "PUT";

export default async function request(method, url, body) {
  const response = await fetch(`http://localhost:5000/${url}`, {
    method,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  return await response.json();
}

export const prerender = false;
import type { APIContext } from "astro";
import { LINK_API_LIST_EMAIL_DEV } from "@/constants/constants";

export async function POST({ request }: APIContext) {
  const body = request.body;
  console.log("Datos recibidos:", body);

  const response = await fetch(LINK_API_LIST_EMAIL_DEV, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  console.log("Respuesta del servidor:", response);
  if (!response.ok) {
    console.error("Error al enviar los datos:", response.statusText);
    return new Response("Error al enviar los datos", { status: 500 });
  }
  const data = await response.json();
  console.log("Datos recibidos del servidor:", data);
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

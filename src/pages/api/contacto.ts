export const prerender = false;
import type { APIContext } from "astro";

export async function POST({ request }: APIContext) {
  const body = await request.body;
  console.log("Datos recibidos:", body);

  // Aquí podrías enviar correo, guardar en base de datos, etc.
  return new Response(JSON.stringify({ status: "ok", received: body }), {
    headers: { "Content-Type": "application/json" },
  });
}

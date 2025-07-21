import type { ContactFormData } from "@/types/types";

const LINK_API_LIST_EMAIL = import.meta.env.PUBLIC_LINK_API_LIST_EMAIL;

export const FetchData = async (data: ContactFormData) => {
  console.log("Enviando datos:frontend", data);
  try {
    const res = await fetch(LINK_API_LIST_EMAIL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log("Respuesta de la API:", result);
    return { response: result, status: res.status };
  } catch (err) {
    console.error("Error al enviar:", err);
  }
};

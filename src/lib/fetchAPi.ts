export const FetchData = async (data: FormData) => {
  try {
    const res = await fetch("/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log("Respuesta de la API:", result);
  } catch (err) {
    console.error("Error al enviar:", err);
  }
};

async function getData() {
  const res = await fetch(
    "https://64ca66e8700d50e3c704da5c.mockapi.io/api/va/services"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function fetchServices() {
  const data = await getData();

  return data;
}

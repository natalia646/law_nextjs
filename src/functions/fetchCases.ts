async function getData() {
  const res = await fetch(
    "https://666d735d7a3738f7cacc677f.mockapi.io/api/cases",
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function fetchCases() {
  const data = await getData();

  return data;
}



export default async function HandleAvailability(formData, setError, setTables, setPage) {
  setError("");

  try {
    const response = await fetch(
      `http://localhost:5240/api/reservations/available-tables?date=${formData.date}&startTime=${formData.time}&partySize=${formData.numberOfGuests}`
    );

    if (!response.ok) throw new Error("Failed to fetch available tables");

    const data = await response.json();
    setTables(data);
    setPage((currPage) => currPage + 1);
  } catch (err) {
    setError("Something went wrong: " + err.message);
  }
}
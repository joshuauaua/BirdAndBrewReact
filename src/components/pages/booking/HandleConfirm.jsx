export default async function HandleConfirm(formData, customerId, setError) {
  setError("");

  try {
    const response = await fetch("http://localhost:5240/api/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        numberOfGuests: Number(formData.numberOfGuests),
        reservationDate: formData.date,
        reservationStartTime: formData.time,
        fk_CustomerId: customerId,
        fk_TableId: formData.tableId,
      }),
    });

    const text = await response.text();
    console.log("API response:", text);

    if (!response.ok) throw new Error("Booking failed");

    return JSON.parse(text);
  } catch (err) {
    console.error(err);
    setError("Something went wrong when confirming your booking.");
    throw err;
  }
}
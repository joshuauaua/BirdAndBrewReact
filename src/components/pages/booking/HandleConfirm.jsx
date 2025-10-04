
export default async function HandleConfirm(formData, customerId, setError, setPage) {
  setError("");

  try {
    const response = await fetch("http://localhost:5240/api/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        numberOfGuests: formData.numberOfGuests,
        reservationDate: formData.date,
        reservationStartTime: formData.time,
        fk_CustomerId: customerId,
        fk_TableId: formData.tableId
      }),
    });

    if (!response.ok) throw new Error("Booking failed");

    const result = await response.json();
    console.log("Reservation confirmed:", result);
    setPage((currPage) => currPage + 1);
  } catch (err) {
    console.error(err);
    setError("Something went wrong when confirming your booking.");
  }
}
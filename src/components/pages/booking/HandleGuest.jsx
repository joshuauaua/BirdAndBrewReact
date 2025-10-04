import HandleConfirm from "./HandleConfirm";

export default async function HandleGuest(formData, setError) {
  setError("");

  try {
    const response = await fetch("http://localhost:5240/api/customers/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        emailAddress: formData.email,
        phoneNumber: formData.phoneNumber,
      }),
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok || !data?.customerId) {
      throw new Error("Failed to retrieve customer ID");
    }

    console.log("Customer ID received:", data.customerId);
    formData.customerId = data.customerId;

    // Once customer exists, create reservation
    await HandleConfirm(formData, data.customerId, setError);
  } catch (err) {
    console.error(err);
    setError(err.message || "Something went wrong, please try again.");
    throw err;
  }
}
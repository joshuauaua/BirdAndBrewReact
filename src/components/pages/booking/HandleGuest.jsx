import HandleConfirm from "./HandleConfirm";

export default async function HandleGuest(formData, setError, setPage) {
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
    if (!response.ok) throw new Error("Failed to send data");

    if (data && data.customerId) {
      console.log("Customer ID received:", data.customerId);
      await HandleConfirm(formData, data.customerId, setError, setPage);
    } else {
      throw new Error("No customerId returned from API");
    }
  } catch (err) {
    console.error(err);
    setError("Something went wrong, please try again.");
  }
}
export default function ValidateBooking(formData) {
  const errors = {};

  // Email validation
  if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    errors.email = "Invalid email address";
  }

  // Phone number (simple numeric check)
  if (!formData.phoneNumber.match(/^\d{7,15}$/)) {
    errors.phoneNumber = "Invalid phone number";
  }

  // Number of guests
  if (
    isNaN(formData.numberOfGuests) ||
    formData.numberOfGuests < 1 ||
    formData.numberOfGuests > 20
  ) {
    errors.numberOfGuests = "Number of guests must be 1–20";
  }

  // Date & time (basic check)
  if (!formData.date) errors.date = "Date is required";
  if (!formData.time) errors.time = "Time is required";

  return errors;
}
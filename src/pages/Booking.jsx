import React, { useState } from "react";
import "./Booking.css";

import Availability from "../components/pages/booking/Availability";
import GuestInfo from "../components/pages/booking/GuestInfo";
import SelectTable from "../components/pages/booking/SelectTable";
import Confirmation from "../components/pages/booking/Confirmation";
import DynamicFooter from "../components/pages/booking/DynamicFooter";
import ConfirmationModal from "../components/pages/booking/ConfirmationModal";
import HandleGuest from "../components/pages/booking/HandleGuest";
import Background from "../components/pages/home/Background";
import ValidateBooking from "../components/helpers/ValidateBooking";

export default function Booking() {
  const [tables, setTables] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    tableNumber: 0,
    tableId: 0,
    date: "",
    time: "",
    numberOfGuests: 0,
    customerId: 0,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const FormTitles = [
    "Availability",
    "Select Table",
    "Personal Info",
    "Confirmation",
  ];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <Availability formData={formData} setFormData={setFormData} />;
      case 1:
        return (
          <SelectTable
            formData={formData}
            setFormData={setFormData}
            tables={tables}
          />
        );
      case 2:
        return <GuestInfo formData={formData} setFormData={setFormData} />;
      case 3:
        return <Confirmation formData={formData} />;
      default:
        return null;
    }
  };

  const handleConfirmWithModal = async () => {
    // Validate before confirming
    const validationErrors = ValidateBooking(formData);
    if (Object.keys(validationErrors).length > 0) {
      setError(Object.values(validationErrors).join(", "));
      return;
    }

    setError(""); // clear previous errors

    try {
      await HandleGuest(formData, setError, setPage);
      setModalMessage("Booking Confirmed ✅");
      setModalVisible(true);
    } catch (err) {
      console.error("Booking error:", err);
      setError("Something went wrong when confirming your booking.");
    }
  };

  return (
    <>
      <Background />
      <div className="form-wrapper">
        <div className="form-container">
          <div className="form-header">
            <h1 className="form-titles">{FormTitles[page]}</h1>
          </div>

          <div className="form-body">{PageDisplay()}</div>

          <div className="form-footer">
            <DynamicFooter
              page={page}
              formData={formData}
              setError={setError}
              setTables={setTables}
              setPage={setPage}
              handleConfirm={handleConfirmWithModal}
            />
          </div>

          {error && <p className="error-message">{error}</p>}
        </div>

        <ConfirmationModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          message={modalMessage}
        />
      </div>
    </>
  );
}
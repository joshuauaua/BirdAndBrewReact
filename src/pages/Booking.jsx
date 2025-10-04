import "./Booking.css";
import { useState } from "react";

import Availability from "../components/pages/booking/Availability";
import GuestInfo from "../components/pages/booking/GuestInfo";
import SelectTable from "../components/pages/booking/SelectTable";
import Confirmation from "../components/pages/booking/Confirmation";
import DynamicFooter from "../components/pages/booking/DynamicFooter";
import ConfirmationModal from "../components/pages/booking/ConfirmationModal";
import HandleGuest from "../components/pages/booking/HandleGuest";
import Background from "../components/pages/home/Background"

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
    if (page === 0)
      return <Availability formData={formData} setFormData={setFormData} />;
    else if (page === 1)
      return (
        <SelectTable
          formData={formData}
          setFormData={setFormData}
          tables={tables}
        />
      );
    else if (page === 2)
      return <GuestInfo formData={formData} setFormData={setFormData} />;
    else return <Confirmation formData={formData} />;
  };

  const handleConfirmWithModal = async () => {
    try {
      // First, check or create customer and get their ID
      await HandleGuest(formData, setError);

      if (!formData.customerId) throw new Error("Customer ID missing");

      setModalMessage("Booking Confirmed ✅🎉");
      setModalVisible(true);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong when confirming your booking.");
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
import './Form.css'
import { useState } from 'react'
import Availability from './Availability'
import GuestInfo from './GuestInfo'
import SelectTable from './SelectTable'
import Confirmation from './Confirmation'

export default function Form(){
  const [tables, setTables] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    tableNumber: 0,
    date: "",
    time: "",
    numberOfGuests: 0,
    customerId: 0,
  });


  // Function that will be attached to an on click that fetches from an API based on input data to see availabale tables 
  const handleAvailabilityNext = () => {
    setError("");

    fetch(
      `http://localhost:5240/api/reservations/available-tables?date=${formData.date}&startTime=${formData.time}&partySize=${formData.numberOfGuests}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send data");
        }

        else if (response.ok){
          return response.json();
        }
      })
      .then((data) => {
        setTables(data);
        setPage((currPage) => currPage + 1);
      })
      .catch((err) => {
        setError("Something went wrong:" + err.message);
      });
  };

   

    //Function to check if a customer exists, if so, return an ID, if not, create a new and return ID
    const handleGuest = async () => {
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
    
        console.log("Response status:", response.status);
    
        const text = await response.text();
        const data = text ? JSON.parse(text) : null;
        console.log("Response data:", data);
    
        if (!response.ok) throw new Error("Failed to send data");
    
        if (data && data.customerId) {
          console.log("Customer ID received:", data.customerId);


          await handleConfirm(data.customerId);
        } else {
          throw new Error("No customerId returned from API");
        }
      } catch (err) {
        console.error(err);
        setError("Something went wrong, please try again.");
      }
    };
 

 // Function to  post a forms input to a backend api
   
 const handleConfirm = async (customerId) => {
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
        fk_TableId: tableId
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
};


  const FormTitles = [
    "Availability",
    "Select Table",
    "Personal Info",
    "Confirmation",
  ];


  //Which page to display depending on page number
  const PageDisplay = () => {
    if (page === 0) {
      return <Availability formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <SelectTable formData={formData} setFormData={setFormData} tables={tables}/>;
    } else if (page === 2) {
      return <GuestInfo formData={formData} setFormData={setFormData} />;
    } else  {
      return <Confirmation formData={formData} setFormData={setFormData} />;
    }
  };


const DynamicFooter = () => {
  if (page === 0) {
    return <button className="btn-primary" 
     onClick={handleAvailabilityNext}>Check Availability</button>;


  } else if (page == 1 || page == 2) {
    return (
      <div>
        <button className="btn-secondary"
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Go Back
        </button>

        <button className="btn-primary"
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
        >
          Next
        </button>
      </div>
    );
  } 

  else {
    return (
      <div>
         <button
         className="btn-secondary"
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Go Back
        </button>
        <button className="btn-primary" 
        onClick={handleGuest}>Confirm your booking</button>
      </div>
    );
  }
}


  return (
    <>
      <div className="form">

        {/* Progress bar that gets filled depending on the page */}
        <div className="progressBar" >
          <span
            style={{
              width:
                page === 0
                  ? "25%"
                  : page == 1
                  ? "50%"
                  : page == 2
                  ? "75%"
                  : "100%",
            }}
          ></span>
        </div>

        <div className="form-container">
          <div className="form-header">
            <h1 className="form-titles">{FormTitles[page]}</h1>
          </div>

          <div className="form-body">{PageDisplay()}</div>

          <div className="form-footer">

              <DynamicFooter />

          </div>
        </div>
      </div>
    </>
  );
}

 
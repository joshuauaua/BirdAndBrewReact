import './Form.css'


export default function Confirmation ({formData, setFormData}) {

  return (

    <>

    <div className="form-container">
    <h1>Booking Details</h1>
    <p>Name: {formData.firstName}  {formData.lastName}</p>
    <p>Email: {formData.email} </p>
    <p>Phone Number: {formData.phoneNumber} </p>
    <p>Date: {formData.date} </p>
    <p>Time: {formData.time} </p>
    <p>Number of Guests: {formData.numberOfGuests} </p>
    <p>Table Number: {formData.tableNumber}</p>
    </div>
    </>
  )
}
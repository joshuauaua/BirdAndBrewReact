
export default function Availability(){

  return(
    <>

  <div className ="availability-container">
  <input type="date" placeholder="Select Date" />
  <input type="time" placeholder="Select Time" />
  <input type="number" placeholder="Number of Guests" min="1" max="20"/>
  </div>

    </>
  )
}
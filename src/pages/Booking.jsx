import Stepper from "../components/pages/booking/Stepper";

 

export default function Booking() {
  return (
    <>
      <h1>Booking</h1>

      <form>
        <input type="date" placeholder="Date" />
        <input type="time" placeholder="Time" />
        <input type="number" placeholder="Number of Guests" />
        <button type="submit">Submit</button>
      </form>

        </>




  );
}

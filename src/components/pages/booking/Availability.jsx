import '/src/pages/Booking.css'


export default function Availability({ formData, setFormData }) {

  return (
    <>
      <div className="form-container">

        <div className="form-input">
          <label className="form-label"> Select a Date</label>
        <input 
        type="date" 
        placeholder="Select Date" 
        value={formData.date} 
        onChange = {(e) => setFormData({...formData, date: e.target.value})}
        />
        </div>

        <div className="form-input">
        <input 
        type="time" 
        placeholder="Select Time" 
        value={formData.time} 
        onChange={(e) => setFormData({...formData, time: e.target.value})}
        />
        </div>

        <div className="form-input">
        <input
          type="number"
          placeholder="Number of Guests"
          value={formData.numberOfGuests}
          onChange={(e) => setFormData(
            {...formData, 
              numberOfGuests:e.target.value
            })}
            
        />
        </div>

      </div>
    </>
  );
}

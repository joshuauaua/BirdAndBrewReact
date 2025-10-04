export default function Availability({ formData, setFormData }) {

  return (
    <>
      <div className="availability-container">

        <label className="label">Date</label>
        <input 
        type="date" 
        className="input"
        placeholder="Select Date" 
        value={formData.date} 
        onChange = {(e) => setFormData({...formData, date: e.target.value})}
        />

        
        <label className="label">Time</label>
        <input 
        type="time" 
        className="input"
        placeholder="Select Time" 
        value={formData.time} 
        onChange={(e) => setFormData({...formData, time: e.target.value})}
        />


        <label className="label">Number Of Guests</label>
        <input
          type="number"
          className="input"

          placeholder="Number of Guests"
          value={formData.numberOfGuests}
          onChange={(e) => setFormData(
            {...formData, 
              numberOfGuests:e.target.value
            })}
        />
      </div>
    </>
  );
}

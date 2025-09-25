


export default function StepOneAvailability(){


const [formData, setFormData] = useState(null);

const handleSubmit = (e) => {
  e.preventDefault();
  
}


  return<>
  
  <form onSubmit={handleSubmit} >
    <label htmlFor="date">Select a Date:</label>  
    <input type="date" id="date" name="date"/>
    <lable htmlFor="time">Select a Time:</lable>
    <input type="time" id="time" name="time"/>
    <label htmlFor="people">Number of People</label>
    <input type="number" id="people" name="people" min="1" max="20"/>
    <button type="submit">Check Availability</button>
  </form>

  </>
}
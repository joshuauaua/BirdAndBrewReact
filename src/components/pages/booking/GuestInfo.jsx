export default function GuestInfo({ formData, setFormData }) {
  return (
    <>
      <div className="form-container">
        <input type="text" 
        placeholder="First Name" 
        value={formData.firstName}
        onChange = {(e) => setFormData({...formData, firstName: e.target.value})}
        />
                <input type="text" 
        placeholder="Last Name" 
        value={formData.lastName}
        onChange = {(e) => setFormData({...formData, lastName: e.target.value})}
        />



        <input 
        type="email" 
        placeholder="Email Address" 
        value= {formData.email}
        onChange = {(e) => setFormData({...formData, email: e.target.value})}
        />
        <input 
        type="tel" 
        placeholder="Phone Number"
        value ={formData.phoneNumber}
        onChange = {(e) => setFormData({...formData, phoneNumber: e.target.value})}

        />
      </div>
    </>
  );
}

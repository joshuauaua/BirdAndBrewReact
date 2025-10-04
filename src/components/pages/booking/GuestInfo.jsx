export default function GuestInfo({ formData, setFormData }) {
  return (
    <>
      <div className="form-container group">
        <input
          type="text"
          className="input"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
         <span className="highlight"></span>

        <input
          type="text"
          className="input"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
        <span className="highlight"></span>

        <input
          type="email"
          className="input"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <span className="highlight"></span>

        <input
          type="tel"
          className="input"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
        />
        <span className="highlight"></span>
      </div>
    </>
  );
}

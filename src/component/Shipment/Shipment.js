import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  // const navigate = useNavigate();

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };
  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping Information</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email"> YourEmail</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="text">Your address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="text"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="text">Phone Number</label>
            <input
              onBlur={handlePhoneBlur}
              type="text"
              name="text"
              id=""
              required
            />
          </div>

          <input
            style={{ marginTop: "15px", marginBottom: "15px" }}
            className="form-submit"
            type="submit"
            value="Add Shipping"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Shipment;

import { useState } from "react";
import "@fontsource/inter";

export default function TravelClientForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    nationality: "",
    dateOfBirth: "",
    contactEmail: "",
    contactPhone: "",
    emergencyContact: "",
    passportNumber: "",
    passportExpiry: "",
    visaType: "",
    visaValidity: "",
    travelDates: "",
    destinations: "",
    accommodationType: "",
    transportation: "",
    activities: "",
    dietaryPreferences: "",
    travelInsurance: "",
    medicalConditions: "",
    paymentMethod: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg font-inter">
      <h2 className="text-2xl font-bold mb-4">Travel Client Information</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label className="block text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
      </form>
    </div>
  );
}

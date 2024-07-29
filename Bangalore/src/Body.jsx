// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Body.css';

const subscriptionDetails = [
  { service: "24/7 Paramedic Support with 2 Nurses (Mon to Sunday) 8 hrs duty per Nurse", details: "Onsite at 24/7 Office (only Employee)" },
  { service: "Specialist Consultation with Gynac, Cardiologist, Neurologist, Nephrologist, Paediatrician and General Physician doctor consultation – Virtual Unlimited.", details: "Employee + 3 dependants" },
  { service: "Dental Consultation", details: "First consultation free in Rapha Dental Network" },
  { service: "Eye Consultation", details: "First consultation free in Rapha Eye Network" },
  { service: "Gym Membership", details: "Up to 20% discount in Rapha network" },
  { service: "Prescribed Diagnostic Test", details: "Up to 30% discount" },
  { service: "Home Delivery of Medicines", details: "Generic 40% discount and Branded 20%" },
  { service: "Health checkup (BMI, BP, RBS)", details: "Free once a year" },
  { service: "Comprehensive Health Check", details: "Up to 50% discount" },
  { service: "Period Tracker", details: "Only for Female employees" },
  { service: "Ayurveda Consultation", details: "Unlimited Consultation" },
  { service: "Health Videos - 60 Videos", details: "Employee + 3 dependants" },
  { service: "Free Health Score", details: "Employee + 3 dependants" },
  { service: "CT/MRI", details: "Up to 20% discount in Rapha network" },
  { service: "Ambulance", details: "Complimentary ride for emergency" },
  { service: "Mental Wellness Consultation", details: "Unlimited Consultation" },
  { service: "Clinic Management software with analytic data", details: "Complimentary" },
];

const Body = () => {
  return (
    <div>
      <p>Dear [24]7.ai Team, </p>
      <p>Welcome to RaphaCure!</p>
      <p>We thank you for making us a part of your journey to a healthier YOU!</p>
      <p>We're thrilled to announce that we have further enriched our subscription to better cater to your health and well-being needs.</p>
      <div>
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Bangalore</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {subscriptionDetails.map((item, index) => (
              <tr key={index}>
                <td>{item.service}</td>
                <td>{item.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='blue-Container'>
        <b>Here’s why you shouldn’t miss it</b>
        <ul>
          <li>Manage your health better.</li>
          <li>Reduce health risks & complications.</li>
          <li>Keep a control on your health care costs.</li>
          <li>Motivates you to stay healthy & active.</li>
        </ul>
      </div>
      <p>If you have any queries regarding your health check, or need any assistance, 
      please feel free to write back to us at <a id="mail" href="mailto:wellness@raphacure.com">wellness@raphacure.com</a></p>
      <p>We are always there to help! Wishing you Good Health!</p>
    </div>
  )
}

export default Body

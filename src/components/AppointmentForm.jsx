import React, { useState } from 'react';
import { FaWhatsapp, FaCheck, FaSpinner, FaCalendar, FaClock, FaUser, FaPhone, FaStethoscope } from 'react-icons/fa6';
import { bookAppointment } from '../api'; // Import the API function
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    problem: '',
    preferredDate: '',
    preferredTime: '',
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const [whatsappNumber] = useState('7700995363'); // Without +91 for API

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.mobile || !formData.problem || !formData.preferredDate || !formData.preferredTime) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Please fill in all fields'
      });
      return;
    }

    // Mobile number validation (10 digits)
    if (!/^\d{10}$/.test(formData.mobile)) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Please enter a valid 10-digit mobile number'
      });
      return;
    }

    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      error: null
    });

    try {
      // Send data to backend
      const response = await bookAppointment(formData);

      if (response.data.success) {
        // Format date for WhatsApp message
        const formattedDate = new Date(formData.preferredDate).toLocaleDateString('en-IN', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        });

        // Create WhatsApp message
        const message = `📋 *New Appointment Request*
        
👤 *Name:* ${formData.name}
📱 *Mobile:* ${formData.mobile}
🩺 *Problem:* ${formData.problem}
📅 *Preferred Date:* ${formattedDate}
🕐 *Preferred Time:* ${formData.preferredTime}

📍 *Source:* Website Appointment Form
🏥 *Center:* Dr. Jadhavar Physiotherapy & Rehabilitation Center`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Send to WhatsApp
        const whatsappUrl = `https://api.whatsapp.com/send?phone=91${whatsappNumber}&text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');

        // Clear form
        setFormData({
          name: '',
          mobile: '',
          problem: '',
          preferredDate: '',
          preferredTime: '',
        });

        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          error: null
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({
            ...prev,
            isSubmitted: false
          }));
        }, 5000);
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: error.response?.data?.message || 'Failed to book appointment. Please try again.'
      });
    }
  };

  const getMinDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <section className="appointment-section" id="appointment">
      <div className="appointment-container">
        <div className="appointment-header">
          <div className="appointment-badge">
            <span>Book Your Appointment</span>
          </div>
          <h2>Schedule Your Physiotherapy Session</h2>
          <p>
            Fill in your details and our team will get back to you within 24 hours 
            to confirm your appointment.
          </p>
        </div>

        {formStatus.isSubmitted ? (
          <div className="appointment-success">
            <div className="success-icon">
              <FaCheck />
            </div>
            <h3>Appointment Request Submitted! ✅</h3>
            <p>
              Thank you for booking with Dr. Jadhavar Physiotherapy & Rehabilitation Center.
              We will confirm your appointment shortly via WhatsApp and Email.
            </p>
            <div className="success-details">
              <div className="success-item">
                <span>📅 Date:</span>
                <span>{new Date(formData.preferredDate).toLocaleDateString('en-IN', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                })}</span>
              </div>
              <div className="success-item">
                <span>🕐 Time:</span>
                <span>{formData.preferredTime}</span>
              </div>
            </div>
            <a 
              href={`https://wa.me/91${whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-contact-btn"
            >
              <FaWhatsapp /> Contact on WhatsApp
            </a>
          </div>
        ) : (
          <form className="appointment-form" onSubmit={handleSubmit}>
            {formStatus.error && (
              <div className="form-error">
                {formStatus.error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">
                <FaUser className="input-icon" />
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                disabled={formStatus.isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">
                <FaPhone className="input-icon" />
                Mobile Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
                pattern="[0-9]{10}"
                required
                disabled={formStatus.isSubmitting}
              />
              <small className="form-hint">We'll send confirmation via WhatsApp and Email</small>
            </div>

            <div className="form-group">
              <label htmlFor="problem">
                <FaStethoscope className="input-icon" />
                What's your problem? <span className="required">*</span>
              </label>
              <textarea
                id="problem"
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                placeholder="Briefly describe your pain or injury (e.g., Lower back pain, Sports injury, Neck stiffness)"
                rows="3"
                required
                disabled={formStatus.isSubmitting}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="preferredDate">
                  <FaCalendar className="input-icon" />
                  Preferred Date <span className="required">*</span>
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  min={getMinDate()}
                  required
                  disabled={formStatus.isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="preferredTime">
                  <FaClock className="input-icon" />
                  Preferred Time <span className="required">*</span>
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                  disabled={formStatus.isSubmitting}
                >
                  <option value="">Select time</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="09:30 AM">09:30 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="12:30 PM">12:30 PM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="01:30 PM">01:30 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="02:30 PM">02:30 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="03:30 PM">03:30 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="04:30 PM">04:30 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                  <option value="05:30 PM">05:30 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="06:30 PM">06:30 PM</option>
                  <option value="07:00 PM">07:00 PM</option>
                  <option value="07:30 PM">07:30 PM</option>
                </select>
              </div>
            </div>

            <div className="form-footer">
              <p className="form-note">
                <span>💡</span> We'll confirm your appointment within 24 hours
              </p>
              <button 
                type="submit" 
                className="submit-btn"
                disabled={formStatus.isSubmitting}
              >
                {formStatus.isSubmitting ? (
                  <>
                    <FaSpinner className="spinner" /> Submitting...
                  </>
                ) : (
                  <>
                    <FaWhatsapp /> Book Appointment
                  </>
                )}
              </button>
            </div>

            <div className="form-whatsapp-info">
              <p>
                <FaWhatsapp className="whatsapp-icon" />
                Or contact us directly on WhatsApp: 
                <a href={`https://wa.me/91${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  +91 77009 95363
                </a>
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default AppointmentForm;
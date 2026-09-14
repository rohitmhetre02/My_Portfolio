import { useEffect, useRef, useState } from "react";
import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

const projectTypeOptions = [
  "Website Development",
  "Full-Stack Web Application",
  "E-Commerce Development",
  "Landing Page",
  "Admin Dashboard",
  "Website Maintenance",
  "Other",
];

const budgetOptions = [
  "₹5K – ₹10K",
  "₹10K – ₹25K",
  "₹25K – ₹50K",
  "₹50K+",
  "Not sure yet",
];

function ContactWeb3Forms() {
  const successTimeoutRef = useRef(null);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleServiceSelection = (event) => {
      const { projectType = "Other", message = "", serviceName = "" } = event.detail || {};

      setSelectedService(serviceName || projectType);
      setFormData((prev) => {
        const nextMessage = prev.message && prev.message.trim() ? prev.message : message;
        return {
          ...prev,
          projectType,
          message: nextMessage,
        };
      });
      setErrors((prev) => ({ ...prev, projectType: "" }));
      setErrorMessage("");
    };

    window.addEventListener("portfolio-contact-select", handleServiceSelection);

    return () => {
      window.removeEventListener("portfolio-contact-select", handleServiceSelection);
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  const validateForm = (values) => {
    const nextErrors = {};

    if (!values.name || !values.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!values.email || !values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.projectType || !values.projectType.trim()) {
      nextErrors.projectType = "Please select a project type.";
    }

    if (!values.budget || !values.budget.trim()) {
      nextErrors.budget = "Please select your budget.";
    }

    if (!values.message || !values.message.trim()) {
      nextErrors.message = "Project details are required.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const nextErrors = validateForm(formData);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setErrorMessage("Please correct the highlighted fields and try again.");
      setSuccessMessage("");
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setErrorMessage("Web3Forms access key is missing. Please add VITE_WEB3FORMS_ACCESS_KEY in your environment variables.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const payload = {
        access_key: accessKey,
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        project_type: formData.projectType.trim(),
        budget: formData.budget.trim(),
        message: formData.message.trim(),
        subject: `New Project Enquiry — ${formData.name.trim()}`,
        from_name: formData.name.trim(),
        replyto: formData.email.trim(),
        botcheck: "",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || result?.success !== true) {
        throw new Error(result?.message || "Web3Forms submission failed");
      }

      setSuccessMessage("Thanks for reaching out! Your project enquiry has been sent successfully. I'll get back to you soon.");
      setFormData(initialForm);
      setSelectedService("");
      setErrors({});

      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }

      successTimeoutRef.current = setTimeout(() => {
        setSuccessMessage("");
      }, 7000);
    } catch (error) {
      console.error("Web3Forms submit error:", error);
      setErrorMessage("Something went wrong while sending your enquiry. Please try again or contact me directly by email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section-wrap">
      <div className="contact-section">
        <div className="contact-header">
          <p className="contact-kicker">CONTACT</p>
          <h2 className="contact-title">Let&apos;s build something together.</h2>
          <p className="contact-description">
            Have a project in mind? Tell me about it and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Have a project in mind?</h3>
            <p className="contact-side-copy">
              I help businesses and founders turn ideas into modern, high-converting digital products.
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <div>
                  <label>Email</label>
                  <a href="mailto:rohitmhetre2004@gmail.com">rohitmhetre2004@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <div>
                  <label>Location</label>
                  <p>Maharashtra, India</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <i className="fa-solid fa-briefcase"></i>
                </span>
                <div>
                  <label>Availability</label>
                  <p>Available for freelance projects</p>
                </div>
              </div>
            </div>

            <div className="social-icons" aria-label="Social links">
              <a href="https://www.linkedin.com/in/rohit-mhetre02/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/rohitmhetre02" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className="field-block">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  className={errors.name ? "input-error" : ""}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <span id="name-error" className="field-error">{errors.name}</span>}
              </div>

              <div className="field-block">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={errors.email ? "input-error" : ""}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <span id="email-error" className="field-error">{errors.email}</span>}
              </div>

              <div className="field-block full-width">
                <label htmlFor="company">Company / Business</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company or business name"
                  autoComplete="organization"
                  className={errors.company ? "input-error" : ""}
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? "company-error" : undefined}
                />
                {errors.company && <span id="company-error" className="field-error">{errors.company}</span>}
              </div>

              <div className="field-block">
                <label htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={errors.projectType ? "input-error" : ""}
                  aria-invalid={Boolean(errors.projectType)}
                  aria-describedby={errors.projectType ? "projectType-error" : undefined}
                >
                  <option value="">Select project type</option>
                  {projectTypeOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.projectType && <span id="projectType-error" className="field-error">{errors.projectType}</span>}
              </div>

              <div className="field-block">
                <label htmlFor="budget">Budget</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={errors.budget ? "input-error" : ""}
                  aria-invalid={Boolean(errors.budget)}
                  aria-describedby={errors.budget ? "budget-error" : undefined}
                >
                  <option value="">Select your budget</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.budget && <span id="budget-error" className="field-error">{errors.budget}</span>}
              </div>

              <div className="field-block full-width">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, requirements, features, timeline, or anything else I should know..."
                  className={errors.message ? "input-error" : ""}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && <span id="message-error" className="field-error">{errors.message}</span>}
              </div>

              <input type="hidden" name="botcheck" autoComplete="off" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : successMessage ? "Enquiry Sent ✓" : "Send Project Enquiry"}
            </button>

            {selectedService && (
              <p className="selected-service-tag" aria-live="polite">
                Selected: <strong>{selectedService}</strong>
              </p>
            )}

            {errorMessage && <p className="status-message error" role="alert">{errorMessage}</p>}
            {successMessage && <p className="status-message success" role="status">{successMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactWeb3Forms;

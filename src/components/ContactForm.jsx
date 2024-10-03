import { useState } from "react";
import { z } from "zod";
import Button from "./Button";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name cannot exceed 50 characters"),
  companyName: z
    .string()
    .min(1, "Company Name is required")
    .max(100, "Company Name cannot exceed 100 characters"),
  email: z
    .string()
    .email("Invalid email address")
    .max(100, "Email cannot exceed 100 characters"),
  tel: z
    .string()
    .optional()
    .refine(val => !val || val.length >= 7, {
      message: "Phone number must be at least 7 digits long",
    })
    .refine(val => !val || val.length <= 15, {
      message: "Phone number cannot exceed 15 digits",
    })
    .refine(val => !val || /^[+]?[\d\s-]+$/.test(val), {
      message: "Invalid phone number format",
    }),
  requirement: z
    .string()
    .min(10, "Requirement must be at least 10 characters long")
    .max(500, "Requirement cannot exceed 500 characters"),
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    tel: "",
    requirement: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    try {
      contactSchema.parse(formData);
      alert("Form submitted successfully");
      setFormData({
        name: "",
        companyName: "",
        email: "",
        tel: "",
        requirement: "",
      });
      setErrors({});
    } catch (error) {
      const formattedErrors = error.formErrors.fieldErrors;
      setErrors(formattedErrors);
    }
  };

  return (
    <div className="w-full lg:w-1/2 p-6 xl:p-10 rounded-lg border border-neutral-500">
      <form
        onSubmit={handleSubmit}
        className="space-y-4">
        {["name", "companyName", "email", "tel", "requirement"].map(field => (
          <div key={field}>
            <input
              type={
                field === "email" ? "email" : field === "tel" ? "tel" : "text"
              }
              name={field}
              placeholder={
                field.charAt(0).toUpperCase() +
                field.slice(1).replace(/([A-Z])/g, " $1")
              }
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-3 md:p-4 rounded-md bg-neutral-200 text-neutral-black"
            />
            {errors[field] && (
              <p className="text-neutral-red">{errors[field]}</p>
            )}
          </div>
        ))}

        <Button
          type="submit"
          title="Submit"
          icon="mdi:arrow-right"
          alt="Submit/Send button"
        />
      </form>
    </div>
  );
};

export default ContactForm;

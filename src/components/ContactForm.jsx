import { useState } from "react";
import { z } from "zod";
import Button from "./Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAnimation from "../utils/hooks/useAnimations";

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
    .refine(val => !val || /^[+]?[\d\s-]+$/.test(val), {
      message: "Invalid phone number format",
    }),
  requirement: z
    .string()
    .min(10, "Requirement must be at least 10 characters long")
    .max(500, "Requirement cannot exceed 500 characters"),
});

const ContactForm = () => {
  useAnimation([".anim-form"]);

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

      toast.success("Submitted successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: false,
        draggable: false,
        progress: 0,
      });

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
    <div className="anim-form w-full lg:w-1/2 flex p-4 xl:p-12 rounded-lg border border-neutral-500">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="w-full space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-md bg-neutral-200 text-neutral-black"
          />
          {errors.name && <p className="text-neutral-red">{errors.name}</p>}
        </div>

        <div>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-2 lg:p-4 rounded-md bg-neutral-200 text-neutral-black"
          />
          {errors.companyName && (
            <p className="text-neutral-red">{errors.companyName}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-md bg-neutral-200 text-neutral-black"
          />
          {errors.email && <p className="text-neutral-red">{errors.email}</p>}
        </div>

        <div>
          <input
            type="text"
            name="tel"
            placeholder="Phone Number (Optional)"
            value={formData.tel}
            onChange={handleChange}
            className="w-full p-4 rounded-md bg-neutral-200 text-neutral-black"
          />
          {errors.tel && <p className="text-neutral-red">{errors.tel}</p>}
        </div>

        <div>
          <textarea
            name="requirement"
            placeholder="Describe Your Requirement"
            value={formData.requirement}
            onChange={handleChange}
            className="w-full p-4 rounded-md bg-neutral-200 text-neutral-black h-24"
          />
          {errors.requirement && (
            <p className="text-neutral-red">{errors.requirement}</p>
          )}
        </div>

        <div className="flex-col items-center space-y-4">
          <Button
            type={"submit"}
            title="Submit"
            icon="mdi:arrow-right"
            alt="Submit/Send button"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

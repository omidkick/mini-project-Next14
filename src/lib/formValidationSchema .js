import * as yup from "yup";

export const formValidationSchema = yup
  .object({
    fullName: yup
      .string()
      .required("Full name is required")
      .min(3, "Minimum 3 characters required")
      .max(50, "Maximum 50 characters allowed"),

    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email address"),

    age: yup
      .number()
      .required("Age is required")
      .positive("Age must be positive")
      .integer("Age must be a whole number")
      .min(18, "You must be at least 18 years old")
      .max(120, "Age must be less than 120")
      .typeError("Please enter a valid number"),

    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),

    address: yup
      .string()
      .required("Address is required")
      .min(10, "Address must be at least 10 characters"),

    city: yup
      .string()
      .required("City is required")
      .min(2, "City name must be at least 2 characters"),

    zipCode: yup
      .string()
      .required("Zip code is required")
      .matches(/^[0-9]{5}$/, "Zip code must be exactly 5 digits"),

    country: yup.string().required("Please select a country"),

    gender: yup.string().required("Please select your gender"),

    bio: yup.string().max(500, "Bio must be less than 500 characters"),

    terms: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required(),
  })
  .required();
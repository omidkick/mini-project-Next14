"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";
import RHFTextField from "@/ui/RHFTextField";
import RHFTextarea from "@/ui/RHFTextarea";
import RHFSelect from "@/ui/RHFSelect";
import RadioInput from "@/ui/RadioInput";
import Button from "@/ui/Button";
import MiniLoading from "@/ui/MiniLoading";
import { useFormSubmission, useCountries } from "@/hooks/useForm";

// Validation Schema
const schema = yup
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

export default function FormPage() {
  const [selectedGender, setSelectedGender] = useState("");

  // Custom hooks
  const { submitForm, isSubmitting } = useFormSubmission();
  const { countries, fetchCountries } = useCountries();

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  // Fetch countries
  useEffect(() => {
    fetchCountries();
  }, []);

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      await submitForm(data, {
        onSuccess: () => {
          reset();
          setSelectedGender("");
        },
      });
    } catch (error) {
      // Error is already handled by the hook
      console.error("Form submission error:", error);
    }
  };

  // Handle gender change
  const handleGenderChange = (e) => {
    const value = e.target.value;
    setSelectedGender(value);
    setValue("gender", value, { shouldValidate: true });
  };

  return (
    <main className="container mx-auto px-4 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-3">
            Registration Form
          </h1>
          <p className="text-secondary-600">
            Please fill out the form below with your information
          </p>
        </header>

        {/* Form Card */}
        <section className="bg-secondary-0 rounded-xl shadow-lg">
          <div className="p-6 border-b border-secondary-200">
            <h2 className="text-xl font-bold text-secondary-800">
              Personal Information
            </h2>
            <p className="text-secondary-600 text-sm mt-1">
              All fields marked with * are required
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <RHFTextField
                label="Full Name"
                name="fullName"
                placeholder="Enter your full name"
                register={register}
                isRequired
                errors={errors}
                dir="ltr"
              />

              {/* Email */}
              <RHFTextField
                label="Email Address"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                register={register}
                isRequired
                errors={errors}
                dir="ltr"
              />

              {/* Age */}
              <RHFTextField
                label="Age"
                name="age"
                type="number"
                placeholder="Enter your age"
                register={register}
                isRequired
                errors={errors}
                dir="ltr"
              />

              {/* Phone */}
              <RHFTextField
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="1234567890"
                register={register}
                isRequired
                errors={errors}
                dir="ltr"
              />

              {/* Address */}
              <div className="md:col-span-2">
                <RHFTextField
                  label="Street Address"
                  name="address"
                  placeholder="123 Main Street, Apt 4B"
                  register={register}
                  isRequired
                  errors={errors}
                  dir="ltr"
                />
              </div>

              {/* City */}
              <RHFTextField
                label="City"
                name="city"
                placeholder="Enter your city"
                register={register}
                isRequired
                errors={errors}
                dir="ltr"
              />

              {/* Zip Code */}
              <RHFTextField
                label="Zip Code"
                name="zipCode"
                placeholder="12345"
                register={register}
                isRequired
                errors={errors}
                dir="ltr"
              />

              {/* Country */}
              <div className="md:col-span-2">
                <RHFSelect
                  label="Country"
                  name="country"
                  options={countries}
                  placeholder="Select your country"
                  register={register}
                  isRequired
                  errors={errors}
                />
              </div>

              {/* Gender - Radio Buttons */}
              <fieldset className="md:col-span-2">
                <legend className="mb-3 block text-secondary-700 font-medium">
                  Gender <span className="text-error ml-1">*</span>
                </legend>
                <div className="flex flex-wrap gap-6">
                  <RadioInput
                    id="male"
                    name="gender"
                    value="male"
                    label="Male"
                    checked={selectedGender === "male"}
                    onChange={handleGenderChange}
                  />
                  <RadioInput
                    id="female"
                    name="gender"
                    value="female"
                    label="Female"
                    checked={selectedGender === "female"}
                    onChange={handleGenderChange}
                  />
                  <RadioInput
                    id="other"
                    name="gender"
                    value="other"
                    label="Other"
                    checked={selectedGender === "other"}
                    onChange={handleGenderChange}
                  />
                </div>
                <input type="hidden" {...register("gender")} />
                {errors.gender && (
                  <span className="text-red-600 block text-xs mt-2" role="alert">
                    {errors.gender.message}
                  </span>
                )}
              </fieldset>

              {/* Bio - Textarea */}
              <div className="md:col-span-2">
                <RHFTextarea
                  label="Bio (Optional)"
                  name="bio"
                  placeholder="Tell us about yourself..."
                  rows={4}
                  register={register}
                  errors={errors}
                  dir="ltr"
                />
              </div>

              {/* Terms and Conditions */}
              <div className="md:col-span-2">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    {...register("terms")}
                    className="mt-1 w-4 h-4 text-primary-900 border-secondary-300 rounded focus:ring-primary-500 focus:ring-2"
                    aria-describedby="terms-error"
                  />
                  <label
                    htmlFor="terms"
                    className="text-secondary-700 text-sm cursor-pointer"
                  >
                    I agree to the terms and conditions{" "}
                    <span className="text-error">*</span>
                  </label>
                </div>
                {errors.terms && (
                  <span
                    id="terms-error"
                    className="text-red-600 block text-xs mt-2"
                    role="alert"
                  >
                    {errors.terms.message}
                  </span>
                )}
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="flex-1 sm:flex-none min-w-[200px]"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <MiniLoading size="sm" />
                    <span>Submitting...</span>
                  </span>
                ) : (
                  "Submit Form"
                )}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  reset();
                  setSelectedGender("");
                }}
                disabled={isSubmitting}
              >
                Reset Form
              </Button>
            </div>
          </form>
        </section>

        {/* Info Box */}
        <aside className="mt-8 p-4 bg-secondary-100 rounded-lg">
          <h3 className="font-semibold text-secondary-900 mb-2">
            Validation Rules:
          </h3>
          <ul className="text-sm text-secondary-600 space-y-1">
            <li>• Full name must be 3-50 characters</li>
            <li>• Valid email address required</li>
            <li>• Age must be between 18-120</li>
            <li>• Phone number must be exactly 10 digits</li>
            <li>• Zip code must be exactly 5 digits</li>
            <li>• Address must be at least 10 characters</li>
            <li>• Gender selection is required</li>
            <li>• Terms and conditions must be accepted</li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
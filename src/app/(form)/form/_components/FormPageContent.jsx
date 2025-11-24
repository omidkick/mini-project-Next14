"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import { useFormSubmission, useCountries } from "@/hooks/useForm";
import FormFields from "./FormFields";
import FormActions from "./FormActions";
import { formValidationSchema } from "@/lib/formValidationSchema ";

export default function FormPageContent() {
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
    resolver: yupResolver(formValidationSchema),
    mode: "onBlur",
  });

  // Fetch countries
  useEffect(() => {
    fetchCountries();
  }, []);

  // Handle submission
  const onSubmit = async (data) => {
    try {
      await submitForm(data, {
        onSuccess: () => {
          reset();
          setSelectedGender("");
        },
      });
    } catch (error) {
      console.error("Form error:", error);
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
            {/* All Form Fields */}
            <FormFields
              register={register}
              errors={errors}
              countries={countries}
              selectedGender={selectedGender}
              handleGenderChange={handleGenderChange}
            />

            {/* Submit & Reset Buttons */}
            <FormActions
              isSubmitting={isSubmitting}
              onReset={() => {
                reset();
                setSelectedGender("");
              }}
            />
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

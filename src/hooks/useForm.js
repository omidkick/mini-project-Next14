"use client";

import { getCountries, submitFormData } from "@/services/formServices";
import { useState } from "react";
import toast from "react-hot-toast";

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const submitForm = async (data, options = {}) => {
    setIsSubmitting(true);
    setSubmitError(null);

    // loading
    const loadingToast = toast.loading("Submitting form...");

    try {
      // Call API service
      const response = await submitFormData(data);

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      // Show success toast
      toast.success(response.message || "Form submitted successfully!", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#10b981",
          color: "#fff",
          fontWeight: "600",
        },
        icon: "✓",
      });

      // Call success callback if provided
      if (options.onSuccess) {
        options.onSuccess(response.data);
      }

      return response;
    } catch (error) {
      // Dismiss loading toast
      toast.dismiss(loadingToast);

      // Set error state
      setSubmitError(error.message);

      // error toast
      toast.error(error.message || "Something went wrong. Please try again.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#ef4444",
          color: "#fff",
          fontWeight: "600",
        },
        icon: "✕",
      });

      // Call error callback if provided
      if (options.onError) {
        options.onError(error);
      }

      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting,
    submitError,
  };
};

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCountries = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getCountries();
      setCountries(data);
      return data;
    } catch (error) {
      console.error("Failed to load countries:", error);
      setError(error.message);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  return {
    countries,
    isLoading,
    error,
    fetchCountries,
  };
};

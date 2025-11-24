// Submit form data (Mock API for now)
export async function submitFormData(data) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const isSuccess = Math.random() > 0.1;

    if (!isSuccess) {
      throw new Error("Submission failed. Please try again.");
    }

    // Simulate API response
    return {
      success: true,
      message: "Form submitted successfully!",
      data: {
        id: Math.floor(Math.random() * 10000),
        submittedAt: new Date().toISOString(),
        ...data,
      },
    };
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
}

// Get countries list
export async function getCountries() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return [
      { value: "US", label: "United States" },
      { value: "UK", label: "United Kingdom" },
      { value: "CA", label: "Canada" },
      { value: "AU", label: "Australia" },
      { value: "DE", label: "Germany" },
      { value: "FR", label: "France" },
      { value: "JP", label: "Japan" },
      { value: "IN", label: "India" },
      { value: "BR", label: "Brazil" },
      { value: "MX", label: "Mexico" },
    ];
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
}

import FormPageContent from "./_components/FormPageContent";

// SEO Metadata
export const metadata = {
  title: "Registration Form",
  description:
    "Create your account with our secure registration form. Easy sign-up with real-time validation.",
  keywords: ["registration", "form", "sign up", "account"],
  openGraph: {
    title: "Registration Form | Mini Project",
    description: "Create your account with our secure registration form.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Registration Form",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FormPage() {
  return <FormPageContent />;
}

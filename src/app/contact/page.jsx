"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the provided URL
    window.location.href = "https://ecell.dmce.ac.in/our-team/";
  }, []);

  // Return null to prevent rendering anything on this page
  return null;
};

export default ContactPage;

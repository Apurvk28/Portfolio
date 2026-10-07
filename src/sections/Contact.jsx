/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert.jsx";
import ContactWithGlobe from "@/ui/contact-with-globe.jsx";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_24lmz5a",
        "template_414grk9",
        {
          from_name: formData.company
            ? `${formData.name} (${formData.company})`
            : formData.name,
          to_name: "Apurv",
          from_email: formData.email,
          to_email: "khairnarapurv@gmail.com",
          message: formData.message,
        },
        ""
      );
      setIsLoading(false);
      setFormData({ name: "", company: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent successfully!");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      showAlertMessage("danger", "Something went wrong! Please try again.");
    }
  };

  return (
    <div className="relative w-full" id="contact">
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <ContactWithGlobe
        title="Let's Talk"
        subtitle="Contact"
        description="Whether you're looking to scale your engineering team, interview strong full-stack talent, or discuss an open technical role, I'm ready to connect."
        onSubmit={handleSubmit}
        formData={formData}
        onChange={handleChange}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Contact;

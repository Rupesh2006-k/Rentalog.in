/** @format */

import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <>
      <section className=" flex flex-col items-center justify-center px-4 py-16 sm:px-8">
        <h2 className="text-[7vw] sm:text-[3vw] font-extrabold  mb-14 text-center">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row items-start justify-center w-full max-w-6xl gap-10">
          <ContactCard />
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

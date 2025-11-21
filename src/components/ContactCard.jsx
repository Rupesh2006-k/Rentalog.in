/** @format */

import React from "react";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

const ContactCard = () => {
  return (
    <div className="w-full md:w-1/2  backdrop-blur-md p-8 rounded-2xl  border border-gray-200/80 transition hover:shadow">
      <h1 className="text-3xl font-semibold mb-3 text-gray-800">
        Hey Rentalog Users
      </h1>
      <p className="mb-6 text-gray-600 leading-relaxed">
        We’re always excited to hear from you! Whether it’s a query, suggestion,
        or feedback — your thoughts matter to us. Let’s create something amazing
        together.
      </p>

      <ul className="space-y-5 text-gray-700">
        <li className="flex items-center gap-3">
          <Mail className="text-emerald-600 w-5 h-5" />
          <span>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@rentalog.in">support@rentalog.in</a>
          </span>
        </li>

        <li className="flex items-center gap-3">
          <Phone className=" w-5 h-5" />
          <span>
            <strong>Phone:</strong>{" "}
            <a href="tel:+916201577047">+91 62015 77047</a>
          </span>
        </li>

        <li className="flex items-center gap-3">
          <MessageCircle className="text-gray-700 w-5 h-5" />
          <span>
            <strong>Chat With Us:</strong> <a href="#">Click for chat</a>
          </span>
        </li>

        <li className="flex items-start gap-3">
          <MapPin className="text-pink-600 w-5 h-5 mt-1" />
          <span>
            <strong>Address:</strong> Shaktinagar, Sonebhadra, UP, 231222
          </span>
        </li>
      </ul>

      <p className="mt-8 text-gray-600">
        We value your input — it helps us improve your Rentalog experience.
      </p>

      <div className="mt-5">
        <p className="font-semibold text-gray-700">Best regards,</p>
        <p className="text-gray-800">The Rentalog Team</p>
      </div>
    </div>
  );
};

export default ContactCard;

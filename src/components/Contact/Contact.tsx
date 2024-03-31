import React, { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../ui/button";

import { useToast } from "../ui/use-toast";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { ToastAction } from "../ui/toast";
import { BsWhatsapp } from "react-icons/bs";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      if (validateForm()) {
        try {
          setIsSubmitting(true);

          await emailjs.sendForm(
            "service_8xy59da",
            "template_qqxii5e",
            form.current,
            "jkol8MrE2QqCSW6zf"
          );

          toast({
            title: "Message Delivered",
            description: "You will soon receive a response from me via email.",
            action: <ToastAction altText="Okay">Done</ToastAction>,
          });

          if (form.current) {
            form.current.reset();
          }
        } catch (error) {
          toast({
            variant: "destructive",
            title: "Message not delivered",
            description: "Please fill it correctly",
          });
        } finally {
          setIsSubmitting(false);
        }
      }
    }
  };

  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};
    let isValid = true;

    // Validate name
    const nameInput = form.current?.elements.namedItem(
      "user_name"
    ) as HTMLInputElement;
    if (!nameInput.value.trim()) {
      errors["user_name"] = "Name is required";
      isValid = false;
    }

    // Validate email
    const emailInput = form.current?.elements.namedItem(
      "user_email"
    ) as HTMLInputElement;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
      errors["user_email"] = "Valid email is required";
      isValid = false;
    }

    // Validate message
    const messageInput = form.current?.elements.namedItem(
      "message"
    ) as HTMLTextAreaElement;
    if (!messageInput.value.trim()) {
      errors["message"] = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <div className={`h-screen`} id="contact">
      <h2 className="font-bold text-center mt-20 mb-10 text-2xl">Contact Us</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto mt-8 p-4 border rounded flex  flex-col gap-10 shadow-lg "
      >
        <div className="mb-4">
          <Label className="block  text-sm font-bold mb-2" htmlFor="user_name">
            Name
          </Label>
          <Input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="username"
            className={`w-full px-3 py-2 border ${
              errors["user_name"] ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors["user_name"] && (
            <p className="text-red-500 text-xs italic">{errors["user_name"]}</p>
          )}
        </div>
        <div className="mb-4">
          <Label className="block text-sm font-bold mb-2" htmlFor="user_email">
            Email
          </Label>
          <Input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="email"
            className={`w-full px-3 py-2 border ${
              errors["user_email"] ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors["user_email"] && (
            <p className="text-red-500 text-xs italic">
              {errors["user_email"]}
            </p>
          )}
        </div>
        <div className="mb-4">
          <Label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="message"
            className={`w-full px-3 py-2 border ${
              errors["message"] ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors["message"] && (
            <p className="text-red-500 text-xs italic">{errors["message"]}</p>
          )}
        </div>
        <div className="mb-4">
          <Button type="submit">
            {isSubmitting ? "Submitting.." : "Submit"}
          </Button>
        </div>
        <span className="">Or</span>
        
        <Button className="flex justify-center items-center"><span >Whatsapp</span><BsWhatsapp className="ml-3 mr-3"/>9861237042 / 9862904140</Button>
   
      </form>
      
    </div>
  );
};

export default Contact;

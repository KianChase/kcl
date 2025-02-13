"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setStatus("submitting");
      
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm p-6"
    >
      <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-8"
          >
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
            <p className="text-gray-600 mb-6">
              Thank you for reaching out. We&apos;ll get back to you shortly.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setStatus("idle")}
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <Input
              label="Name"
              required
              error={errors.name?.message}
              {...register("name")}
            />

            <Input
              label="Email"
              type="email"
              required
              error={errors.email?.message}
              {...register("email")}
            />

            <Input
              label="Subject"
              required
              error={errors.subject?.message}
              {...register("subject")}
            />

            <TextArea
              label="Message"
              required
              rows={4}
              error={errors.message?.message}
              {...register("message")}
            />

            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              tabIndex={-1}
              aria-hidden="true"
              style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
              {...register("phone")}
            />

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-md"
              >
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm">{errorMessage}</p>
              </motion.div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={status === "submitting"}
              loadingText="Sending..."
              icon={<Send className="h-4 w-4" />}
              className="w-full"
            >
              Send Message
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 
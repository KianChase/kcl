"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

interface ProductEnquiryFormProps {
  productName: string;
  category: string;
}

export default function ProductEnquiryForm({ productName, category }: ProductEnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      setStatus("submitting");
      // TODO: Implement form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
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
      <h3 className="text-xl font-semibold mb-4">Request Quote</h3>
      
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-green-600 flex items-center gap-2"
          >
            <CheckCircle className="h-5 w-5" />
            <p>Thank you for your enquiry. Our team will contact you shortly.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <input type="hidden" value={productName} />
            <input type="hidden" value={category} />
            
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
              label="Phone"
              type="tel"
              error={errors.phone?.message}
              {...register("phone")}
            />
            <p className="text-sm text-gray-500 mt-1">Optional</p>

            <TextArea
              label="Message"
              required
              rows={4}
              error={errors.message?.message}
              {...register("message")}
            />

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-500">
                <AlertCircle className="h-5 w-5" />
                <p className="text-sm">{errorMessage}</p>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={status === "submitting"}
              loadingText="Sending..."
              icon={<Send className="h-4 w-4" />}
            >
              Send Enquiry
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 
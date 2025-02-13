"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { BRAND } from "@/constants/brand";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        throw new Error("Invalid password");
      }

      // toast({
      //   title: "Logged in successfully",
      //   description: "Welcome to the admin panel.",
      //   variant: "success",
      // });

      router.push("/admin/submissions");
    } catch (error) {
      // toast({
      //   title: "Login failed",
      //   description: "Invalid password. Please try again.",
      //   variant: "error",
      // });
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <Input type="password" name="password" placeholder="Password" />
        <Button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
} 
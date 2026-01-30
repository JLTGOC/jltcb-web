import * as z from "zod";
import { useState } from "react";
import { loginServices } from "@/features/auth/config/login.config";
import type { LoginServiceId } from "@/features/auth/types/types";
import { loginSchema } from "@/features/auth/schemas/loginSchema";
import LoginMenu from "@/features/auth/components/LoginMenu";
import LoginForm from "@/features/auth/components/LoginForm";
import { authService } from "@/services/auth.service";
import { authStorage } from "@/lib/api/authStorage";

export default function LoginPage() {
  const [selectedServiceId, setSelectedServiceId] =
    useState<LoginServiceId | null>(null);

  const selectedService = loginServices.find(
    (service) => service.id === selectedServiceId,
  );

  const handleServiceSelect = (id: LoginServiceId) => {
    setSelectedServiceId(id);
  };

  const handleBack = () => {
    setSelectedServiceId(null);
  };

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    if (!selectedServiceId) return;

    try {
      const { data } = await authService.login(values);
      console.log(data);
      authStorage.setToken(data.token);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-end"
      style={{
        backgroundImage: "url('/src/assets/login-bg.png')",
      }}
    >
      <div className="w-full max-w-2xl">
        {!selectedServiceId ? (
          <LoginMenu
            services={loginServices}
            onServiceSelect={handleServiceSelect}
          />
        ) : (
          <LoginForm
            selectedService={selectedService!}
            onBack={handleBack}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </div>
  );
}

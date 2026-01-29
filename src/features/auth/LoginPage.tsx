import { useState } from "react";
import { loginServices } from "./config/login.config";
import LoginMenu from "./components/LoginMenu";
import LoginForm from "./components/LoginForm";
import type { LoginServiceId } from "../auth/types/types";

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
          <LoginForm selectedService={selectedService!} onBack={handleBack} />
        )}
      </div>
    </div>
  );
}

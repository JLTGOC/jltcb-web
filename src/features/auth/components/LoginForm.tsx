import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { loginSchema } from "../schemas/loginSchema";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { LoginService } from "../types/types";

type LoginFormProps = {
  selectedService: LoginService;
  onBack: () => void;
};

export default function LoginForm({ selectedService, onBack }: LoginFormProps) {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof loginSchema>) {
    // Include the selected service in the submission
    const loginData = {
      ...data,
      serviceId: selectedService.id,
      redirectTo: selectedService.redirectTo,
    };
    console.log("Login data:", loginData);
    // Handle authentication here
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white/90 backdrop-blur gap-10 relative">
      {/* Back button */}
      <button
        type="button"
        onClick={onBack}
        className="absolute top-8 left-8 text-jlt-blue hover:text-jlt-yellow transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>

      {/* Logo wrapper - shows selected service logo */}
      <div className="flex flex-col justify-center items-center">
        <img
          src={selectedService.logos.dark}
          className="max-w-80"
          alt={selectedService.label}
        />
        <p className="text-3xl text-center text-jlt-blue uppercase font-extrabold">
          {selectedService.label}
        </p>
      </div>

      {/* Login form */}
      <form
        className="flex flex-col min-w-md"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FieldGroup className="gap-4">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Input
                  {...field}
                  id="email-input"
                  aria-invalid={fieldState.invalid}
                  placeholder="Email"
                  autoComplete="email"
                  className="bg-white shadow-lg rounded-md py-6"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Input
                  {...field}
                  id="password-input"
                  aria-invalid={fieldState.invalid}
                  placeholder="Password"
                  type="password"
                  autoComplete="current-password"
                  className="bg-white shadow-lg rounded-md py-6"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field> 
            )}
          />
          <Field>
            <Button
              type="submit"
              variant="jltYellow"
              size="lg"
              className="text-2xl py-6 rounded-md"
            >
              sign in
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}

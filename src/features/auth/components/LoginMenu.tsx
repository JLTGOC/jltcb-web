import logo from "@/assets/jlt-white.png";
import word from "@/assets/jlt-white-word.png";
import type { LoginServiceId, LoginService } from "../types/types";

type LoginMenuProps = {
  services: LoginService[];
  onServiceSelect: (id: LoginServiceId) => void;
};

export default function LoginMenu({
  services,
  onServiceSelect,
}: LoginMenuProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-16 bg-black/90 backdrop-blur">
      {/* logo wrapper */}
      <div className="flex flex-col justify-center items-center gap-6">
        <img src={logo} className="max-w-64" alt="JLT Logo" />
        <img
          src={word}
          className="max-w-10/12"
          alt="Jill L. Tolentino Customs Brokerage"
        />
      </div>
      {/* menu items */}
      <div className="flex justify-center items-center text-white">
        {services.map((service) => {
          const isDisabled =
            service.id === "business" || service.id === "logistics";
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onServiceSelect(service.id)}
              disabled={isDisabled}
              className={`
        flex flex-col items-center justify-center gap-4
        transition-all duration-200  hover:text-jlt-yellow
        ${isDisabled ? "opacity-70 cursor-not-allowed" : "opacity-100 hover:scale-105"}
      `}
            >
              <img src={service.logos.light} alt={service.label} />
              <p className="text-xl text-center uppercase font-extrabold">
                {service.label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

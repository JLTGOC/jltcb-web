import logo from "@/assets/jlt-white.png";
import word from "@/assets/jlt-white-word.png";
import type { LoginServiceId, LoginService } from "../types/types";

type LoginMenuProps = {
  services: LoginService[];
  selectedServiceId: LoginServiceId;
  onServiceSelect: (id: LoginServiceId) => void;
};

export default function LoginMenu({
  services,
  selectedServiceId,
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
      <div className="flex justify-center items-center ">
        {services.map((service) => {
          const isActive = service.id === selectedServiceId;
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onServiceSelect(service.id)}
              className={`
                flex flex-col items-center justify-center gap-4
                transition-all duration-200
                ${isActive ? "scale-105" : "opacity-70 hover:opacity-100"}
              `}
            >
              <img src={service.logos.light} alt={service.label} />
              <p className="text-xl text-center uppercase font-extrabold text-white">
                {service.label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { setUser } = useUser();
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<string[]>([]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const validatePassword = (password: string) => {
    return /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];

    if (!validateEmail(formData.email)) newErrors.push("El correo no es válido.");
    if (!validatePassword(formData.password))
      newErrors.push("La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial.");

    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else {
      setUser({ name: "Usuario", email: formData.email }); // Simulación de inicio de sesión
      router.push("/");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 mb-2 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 mb-2 rounded"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Iniciar sesión</button>
        </form>
        {errors.length > 0 && (
          <div className="mt-4 text-red-500">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

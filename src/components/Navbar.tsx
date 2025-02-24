"use client";

import Link from "next/link";
import { useUser } from "@/context/UserContext";

export default function Navbar() {
  const { user } = useUser();

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">
        <Link href="/">TAREA1</Link>
      </div>
      <div className="flex gap-4">
        <Link href="/register" className="hover:underline">
          Registro
        </Link>
        <Link href="/login" className="hover:underline">
          Login
        </Link>
        <Link href="/color-box" className="hover:underline">Colores</Link>
      </div>
      {user && (
        <div className="font-semibold">
          Bienvenido, {user.name} 👋
        </div>
      )}
    </nav>
  );
}

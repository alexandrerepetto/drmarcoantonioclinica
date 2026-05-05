import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utilitário para mesclar classes do Tailwind CSS de forma condicional,
 * evitando conflitos e duplicatas no estilo.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : 'https://next-notes-ogkkasmy6-dvwhite81s-projects.vercel.app/api';

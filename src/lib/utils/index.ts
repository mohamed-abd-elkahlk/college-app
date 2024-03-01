import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import jwt from "jsonwebtoken";
import { IUser } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function issueJwt(user: IUser) {
  const token = jwt.sign(
    { sub: user._id, emial: user.email, iat: Date.now() },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );
  return token;
}

export function verifyToken(token: string) {
  const verifytToken = jwt.verify(token, process.env.JWT_SECRET!);
  return verifytToken;
}

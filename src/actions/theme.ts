"use server";

import { cookies } from "next/headers";

export async function setTheme(theme: "light" | "dark") {
  const cookieStore = await cookies();
  cookieStore.set("theme", theme, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
}

export async function getTheme(): Promise<"light" | "dark"> {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  return (theme?.value as "light" | "dark") || "light";
}

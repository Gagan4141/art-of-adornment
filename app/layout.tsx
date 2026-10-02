import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"The Art of Adornment — A History of Makeup", description:"A visual journey through the history of cosmetics, from ancient Egypt to the modern beauty ritual." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
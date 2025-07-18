import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vehiqle",
  description: "Find your Dream Car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#2563eb",
          colorAlphaShade: "#1e40af",
          colorTextOnPrimaryBackground: "#fff",
        },
        elements: {
          formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-sm normal-case",
          card: "shadow-none border border-gray-200",
        }
      }}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/cars"
      afterSignUpUrl="/cars"
    >
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-white.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors position="top-center" />

          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with 💗 by RoadsideCoder</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
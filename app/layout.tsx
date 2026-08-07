import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
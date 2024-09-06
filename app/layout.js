import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./SessionWrappper";
import ReduxProvider from "./ReduxProvider";
import SnackbarProviderWrapper from "./SnackbarProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mock Hub",
  description: "One stop solution for all mock tests and interviews",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
        <SnackbarProviderWrapper>
        <ReduxProvider>
          <body className={inter.className}>{children}</body>
        </ReduxProvider>
        </SnackbarProviderWrapper>
      </SessionWrapper>
    </html>
  );
}

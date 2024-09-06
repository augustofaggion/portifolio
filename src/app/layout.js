import localFont from "next/font/local";
import "./main.scss";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}

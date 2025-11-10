import "./../styles/globals.css";

export const metadata = {
  title: "InTheShoesOf — Statement Socks",
  description: "Limited drops. Small batch. Big voice.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";
import Navbar from "./(Navbar)/Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="main">{children}</div>
      </body>
    </html>
  );
}

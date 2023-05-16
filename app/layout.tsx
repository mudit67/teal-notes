import "./globals.css";
import Navbar from "./(Navbar)/Navbar";
import Sidebar from "./(Navbar)/Sidebar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <div className="main">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

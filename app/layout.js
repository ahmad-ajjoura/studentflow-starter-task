import "./globals.css";

export const metadata = {
  title: "StudentFlow",
  description: "Student Course & Task Management Dashboard",
};

export function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <TaskProvider />
      <Footer />
      <html lang="en">
        <body>
          {/* TODO: Add TaskProvider, Navbar, Footer */}
          <main className="main-content">
            {children}
          </main>
        </body>
      </html>
    </>
  );
}

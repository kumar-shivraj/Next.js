export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            background: "lightblue",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <p>Header</p>
        </header>
        {children}
        <footer
          style={{ background: "khaki", padding: "1rem", textAlign: "center" }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}

export default function ResponseLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className="bg-black antialiased">{children}</body>
      </html>
    );
  }
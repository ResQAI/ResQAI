import { ReactNode } from "react";

export default function chatLayout({children}: {children : ReactNode}): ReactNode{
    return (
        <html lang="en">
        <body className="bg-black antialiased">
            {children}
        </body>
        </html>
    );
}
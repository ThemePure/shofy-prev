"use client"
import "../../styles/index.scss";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <title>Shofy - Multipurpose eCommerce Next js Template</title>
        <link rel="icon" src="/public/favicon.ico" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}

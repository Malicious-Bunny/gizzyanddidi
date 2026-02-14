import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "To ada unal from her lover and number 1 fan",
  description:
    "My gift to you, because youre the one I would choose in every lifetime askim!",
  keywords: [
    "Valentine's card game",
    "romantic proposal game",
    "photo card challenge",
    "Valentine's Day surprise",
    "couples game",
    "valentine's day game",
    "proposal game",
  ],

  // Open Graph metadata for Discord, WhatsApp, Facebook, etc.
  openGraph: {
    title: "To ada unal from her lover and number 1 fan",
    description: "My gift to you, because youre the one I would choose in every lifetime askim!",
    type: "website",
    images: [
      {
        url: "/og-image.png",  // will now resolve to https://yourdomain.com/og-image.png
        width: 1200,
        height: 1200,          // ← CHANGED: square for WhatsApp
        alt: "Valentine's Day Proposal Game",
      },
    ]
  },

  //whtspp
  metadataBase: new URL("https://gizzyanddidi.vercel.app/"), // ← ADD THIS, replace with your actual domain



  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "To ada unal from her lover and number 1 fan",
    description: "My gift to you, because youre the one I would choose in every lifetime askim!",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

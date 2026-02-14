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
    title: "Valentines: A Romantic Card Game with a Surprise Proposal",
    description: "Play a unique Valentine's card game. Complete the collection to reveal a romantic proposal!",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Valentine's Day Proposal Game",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Valentines: A Romantic Card Game with a Surprise Proposal",
    description: "Play a unique Valentine's card game. Complete the collection to reveal a romantic proposal!",
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

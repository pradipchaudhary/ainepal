import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "AI Nepal — Open AI Community & Tools for Nepal 🇳🇵",
    description: "AI Nepal is a community-driven platform providing Nepali AI tools, tutorials in Nepali, and resources to empower Nepal with Artificial Intelligence.",
    keywords: ["AI Nepal", "Nepali AI Tools", "Nepali Tutorials", "OCR Nepali", "Speech Recognition Nepal", "Nepali Chatbot", "Artificial Intelligence Nepal"],
    authors: [{ name: "Pradip Chaudhary", url: "https://www.pradipchaudhary.com.np" }],
    openGraph: {
        title: "AI Nepal — AI Tools, Tutorials, and Community 🇳🇵",
        description: "Explore open-source Nepali OCR, chatbots, and AI courses — All in Nepali.",
        url: "https://ainepal.vercel.app/",
        siteName: "AI Nepal",
        locale: "en_NP",
        type: "website",
        images: [
            {
                url: "https://ainepal.vercel.app/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "AI Nepal Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Nepal — Tools, Learning & AI Community 🇳🇵",
        description: "AI Tools and Courses in Nepali Language — Open for Everyone",
        site: "@ainepalofficial",
    },
    metadataBase: new URL("https://ainepal.vercel.app/"),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="canonical" href="https://ainepal.vercel.app/" />

                {/* Favicons */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}

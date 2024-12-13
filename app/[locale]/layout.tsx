/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { notFound } from "next/navigation";

import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "EditPlusPlus",
  description: "Next Generation of Image Editing",
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = params;

  // Show a 404 error if the user requests an unknown locale
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // console.log(locale);

  const messages = await getMessages();

  console.log(messages);

  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#624cf5" },
      }}
    >
      <html lang={locale}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased  flex flex-col`}
        >
          <main className=" relative flex-1 flex flex-col">
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}

// export default async function LocaleLayout({
//   children,
//   params: { locale },
// }: {
//   children: React.ReactNode;
//   params: { locale: string };
// }) {
//   // Ensure that the incoming `locale` is valid
//   if (!routing.locales.includes(locale as any)) {
//     notFound();
//   }

//   // Providing all messages to the client
//   // side is the easiest way to get started
//   const messages = await getMessages();

//   console.log(locale);

//   return (
//     <html lang={locale}>
//       <body>
//         <NextIntlClientProvider messages={messages}>
//           <ClerkProvider
//             appearance={{
//               variables: { colorPrimary: "#624cf5" },
//             }}
//           >
//             <html lang={locale}>
//               <body
//                 className={`${geistSans.variable} ${geistMono.variable} antialiased  flex flex-col`}
//               >
//                 <main className=" relative flex-1 flex flex-col">
//                   {children}{" "}
//                 </main>
//                 <Toaster />
//               </body>
//             </html>
//           </ClerkProvider>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }

// min-h-[calc(100ch-1px)]

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";




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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#624cf5" },
      }}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased  flex flex-col`}
        >
          <main className=" relative flex-1 flex flex-col">{children} </main>
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

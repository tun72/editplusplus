import NavBar from "@/components/shared/NavBar";

import React from "react";

async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const messages = await getMessages();

  return (
    <>
      {/* <NextIntlClientProvider messages={messages}> */}
      <NavBar />
      {children}
      {/* </NextIntlClientProvider> */}
      {/* {children} */}
    </>
  );
}

export default layout;

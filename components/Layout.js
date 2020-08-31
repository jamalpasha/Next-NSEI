import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ menu, children }) => {
  const menuLinks = menu.data.menu_links;
  return (
    <div>
      <Head>
        <title>Fortinet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar menuLinks={menuLinks} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
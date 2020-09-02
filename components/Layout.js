import React from "react";
import Head from "next/head";
import NavBar from "./Navbar";

const Layout = ({ menu, children }) => {
  const menuLinks = menu.data.navbar;
  const logo= menu.data.company_logo;
console.log(menuLinks);
  return (
    <div>
      <Head>
        <title>Fortinet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar menuLinks={menuLinks} logo={logo} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;


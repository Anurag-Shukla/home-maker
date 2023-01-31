import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Banner from "../components/layout/partials/Banner";

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">{children}</main>
    {/* <Banner /> This banner gets loaded on bottom right corner , we can give any link to it */}
    <Footer />
  </>
);

export default LayoutDefault;

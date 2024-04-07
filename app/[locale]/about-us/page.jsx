import React from "react";
import Footer from "@/app/components/footer/Footer";
import Navbar from "@/app/components/navbar/Navbar";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <p>This is about us</p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;

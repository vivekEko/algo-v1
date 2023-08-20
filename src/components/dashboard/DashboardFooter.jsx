import React from "react";
// assets
import ekoLogo from "../../assets/eko_logo.svg";

const DashboardFooter = () => {
  return (
    <footer className=" bg-[#3D3C73]  text-white  mt-10 italic   flex gap-2 justify-center items-center py-5">
      <span>Developed by</span>
      <a href="http://ekoinfomatics.com" target="_blank" rel="noreferrer">
        <img src={ekoLogo} alt="eko" />
      </a>
    </footer>
  );
};

export default DashboardFooter;

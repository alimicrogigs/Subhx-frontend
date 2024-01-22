import React from "react";
import Container from "../common/Container/Container";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Container isborder={false} topborder={true}>
        <div className="relative w-[100%]  flex justify-between px-[120px]  pt-[30px] text-textdull">
          {/* quick links */}
          <div>
            <ul className="flex flex-col gap-[10px]">
              <h1 className="pb-[15px] text-white">Quick Links</h1>
              <li>Blog</li>
              <li>Fees</li>
              <li>Trading</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/* resources */}
          <div>
            <ul className="flex flex-col gap-[10px]">
              <h1 className="pb-[15px] text-white">Resources</h1>
              <li>Risk Disclosures</li>
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
              <li>AML & KYC Policy</li>
              <li>Announcements</li>
            </ul>
          </div>
          {/* referal program */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="pb-[15px] text-white">Referral Program</h1>
              <p>
                Refer friends and earn a generous flat 50% <br />
                commission on their trading fees.
              </p>
            </div>
            <div>
              <h1 className="pb-[15px] text-white">Risk Disclosure</h1>
              <p>
                Trading in cryptocurrencies carries inherent <br />
                risks. trade responsibly.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="mt-[50px] w-[100vw] bg-copywright h-[80px] backdrop-blur-2 mb-[100px] flex justify-between items-center text-white px-[80px]">
        <h1>Copyright © 2023 - SubhX Infotech Pvt Ltd.</h1>
        <div className="text-[1.8rem] flex gap-[20px]">
          <FaInstagram />
          <FaLinkedin />
          <LiaTelegramPlane />
          <FaSquareXTwitter />
          <FaWhatsappSquare />
        </div>
      </div>
    </>
  );
}

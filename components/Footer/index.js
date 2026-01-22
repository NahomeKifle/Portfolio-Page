import React from "react";
import Socials from "../Socials";

const Footer = ({ contactRef }) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0" ref={contactRef} data-contact-section>
        <div>
          <h1 className="text-2xl text-bold">Contact</h1>
          <div className="mt-10">
            <h1 className="text-xl tablet:text-4xl laptop:text-4xl laptopl:text-5xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-xl tablet:text-4xl laptop:text-4xl laptopl:text-5xl text-bold">
              TOGETHER
            </h1>
            <div className="mt-10">
              <a href="mailto:Nahome1212@gmail.com" className="text-xl opacity-40 hover:opacity-70 transition-opacity">
                Nahome1212@gmail.com
              </a>
            </div>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Nahome Kifle
      </h1>
    </>
  );
};

export default Footer;

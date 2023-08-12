"use client";

import { useState } from "react";

const socialLinks = [
  {
    src: "/images/icon-facebook.svg",
    alt: "Facebook",
    href: "#",
  },
  {
    src: "/images/icon-twitter.svg",
    alt: "Twitter",
    href: "#",
  },
  {
    src: "/images/icon-pinterest.svg",
    alt: "Pinterest",
    href: "#",
  },
];

const Share = () => {
  const [showShare, setShowShare] = useState(true);

  const handleClick = () => {
    if (showShare) setShowShare(false);
    if (!showShare) setShowShare(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-light-grayish-blue hover:bg-desaturated-dark-blue z-50 grid h-9 w-9 place-content-center rounded-full transition-all"
      >
        <img src="/images/icon-share.svg" alt="share-button" />
      </button>

      <div
        className={`${
          showShare ? "visible " : "invisible"
        } arrow-down absolute flex bottom-[4rem] -right-[6.2rem] bg-very-dark-grayish-blue items-end gap-4 md:rounded-lg py-4 px-8`}
      >
        <h2 className="text-grayish-blue tracking-[0.3rem] text-sm">SHARE</h2>
        <ul className="flex items-center gap-4 ">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>
                <img
                  src={link.src}
                  alt={link.alt}
                  className="hover:filter-gray transition-all object-cover"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Share;

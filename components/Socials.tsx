"use client";

import Link from "next/link";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";

interface SocialsProps {
  containerStyles: string;
  iconsStyles: string;
}

const icons = [
  {
    name: <RiLinkedinFill />,
    path: "/",
  },
  {
    name: <RiGithubFill />,
    path: "/",
  },
];

const Socials = ({ containerStyles, iconsStyles }: SocialsProps) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

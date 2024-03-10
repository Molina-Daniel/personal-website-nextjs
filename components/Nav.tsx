import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
}

const links = [
  { name: "home", path: "/" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }: NavProps) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;

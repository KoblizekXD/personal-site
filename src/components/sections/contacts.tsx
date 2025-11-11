import { SiGithub } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

export function ContactsPage() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      id="skills"
      className="flex flex-col font-[Poppins] p-12 gap-y-8 w-full h-full"
    >
      <h1 className="text-7xl font-light">Contacts</h1>
      <h2 className="text-3xl">E-mail</h2>
      <div className="flex items-center gap-x-4 text-xl">
        <Mail />
        <Link
          href={"mailto:janprokupek04@gmail.com"}
          className="underline underline-offset-3"
        >
          janprokupek04@gmail.com
        </Link>
      </div>
      <h2 className="text-3xl">Social Media</h2>
      <Link
        href={"https://github.com/KoblizekXD"}
        className="flex items-center gap-x-4 text-xl"
      >
        <SiGithub size={24} />
        KoblizekXD
      </Link>
    </motion.div>
  );
}

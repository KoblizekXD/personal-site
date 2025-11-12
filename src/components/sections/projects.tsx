import { SiGithub } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import Link from "next/link";
import { offsetIndexAtom } from "@/atoms/offset-index";

export function ProjectsPage() {
  const [_, setIndex] = useAtom(offsetIndexAtom);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      id="skills"
      className="flex flex-col p-12 gap-y-8 w-full h-full"
    >
      <h1 className="text-3xl md:text-7xl font-[Poppins] font-light flex items-center gap-x-4">
        Projects
        <Link
          href={"https://github.com/KoblizekXD"}
          target="_blank"
          className="translate-y-1"
        >
          <SiGithub size={42} />
        </Link>
      </h1>
      <div className="bg-[url('/tdc.png')] bg-cover bg-center p-4 space-y-4 rounded shadow bg-black/60 bg-blend-multiply flex-1">
        <h2 className="text-xl md:text-3xl font-[Poppins] font-light">Tour de Cloud</h2>
        <p>
          A self-hostable platform for deploying user applications to our
          platform. Developed for the Tour de App competition.
        </p>
      </div>
      <div className="mt-auto flex items-center justify-center">
        <button
          className="cursor-pointer rounded-full bg-white/10 px-6 py-4 text-xl font-[Poppins]"
          type="button"
          onClick={() => setIndex((prev) => prev + 1)}
        >
          Contacts
        </button>
      </div>
    </motion.div>
  );
}

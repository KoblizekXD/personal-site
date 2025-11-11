import {
  SiBiome,
  SiBun,
  SiC,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGradle,
  SiHibernate,
  SiIntellijidea,
  SiKotlin,
  SiKubernetes,
  SiNextdotjs,
  SiNpm,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
  SiTypst,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { offsetIndexAtom } from "@/atoms/offset-index";

export function SkillsPage() {
  const [_, setIndex] = useAtom(offsetIndexAtom);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      id="skills"
      className="flex flex-col p-12 gap-y-8 w-full h-full"
    >
      <h1 className="text-7xl font-[Poppins] font-light">My Skills</h1>
      <h2 className="text-4xl font-[Poppins] font-light">Tools</h2>
      <div className="flex items-center gap-x-4 *:size-8">
        <SiIntellijidea />
        <SiGit />
        <SiGithub />
        <SiGradle />
        <SiBun />
        <SiNpm />
        <SiDocker />
        <SiKubernetes />
        <SiGithubactions />
        <SiTypst />
        <SiBiome />
      </div>
      <h2 className="text-4xl font-[Poppins] font-light">
        Databases & Platforms
      </h2>
      <div className="flex items-center gap-x-4 *:size-8">
        <SiPostgresql />
        <SiRedis />
        <SiPrisma />
        <SiHibernate />
      </div>
      <h2 className="text-4xl font-[Poppins] font-light">
        Languages & Frameworks
      </h2>
      <div className="flex items-center gap-x-4 *:size-8">
        <SiReact />
        <SiNextdotjs />
        <SiKotlin />
        <SiC />
        <SiSpring />
        <SiTailwindcss />
        <SiTypescript />
      </div>
      <div className="mt-auto flex items-center justify-center">
        <button
          className="cursor-pointer rounded-full bg-white/10 px-6 py-4 text-xl font-[Poppins]"
          type="button"
          onClick={() => setIndex((prev) => prev + 1)}
        >
          Projects
        </button>
      </div>
    </motion.div>
  );
}

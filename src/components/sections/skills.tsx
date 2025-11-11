import { offsetIndexAtom } from "@/atoms/offset-index";
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
import Link from "next/link";

const skillsData = {
  tools: [
    { Icon: SiIntellijidea, url: "https://www.jetbrains.com/idea/" },
    { Icon: SiGit, url: "https://git-scm.com/" },
    { Icon: SiGithub, url: "https://github.com/" },
    { Icon: SiGradle, url: "https://gradle.org/" },
    { Icon: SiBun, url: "https://bun.sh/" },
    { Icon: SiNpm, url: "https://www.npmjs.com/" },
    { Icon: SiDocker, url: "https://www.docker.com/" },
    { Icon: SiKubernetes, url: "https://kubernetes.io/" },
    { Icon: SiGithubactions, url: "https://github.com/features/actions" },
    { Icon: SiTypst, url: "https://typst.app/" },
    { Icon: SiBiome, url: "https://biomejs.dev/" },
  ],
  databases: [
    { Icon: SiPostgresql, url: "https://www.postgresql.org/" },
    { Icon: SiRedis, url: "https://redis.io/" },
    { Icon: SiPrisma, url: "https://www.prisma.io/" },
    { Icon: SiHibernate, url: "https://hibernate.org/" },
  ],
  languages: [
    { Icon: SiReact, url: "https://react.dev/" },
    { Icon: SiNextdotjs, url: "https://nextjs.org/" },
    { Icon: SiKotlin, url: "https://kotlinlang.org/" },
    {
      Icon: SiC,
      url: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    { Icon: SiSpring, url: "https://spring.io/" },
    { Icon: SiTailwindcss, url: "https://tailwindcss.com/" },
    { Icon: SiTypescript, url: "https://www.typescriptlang.org/" },
  ],
};

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
      <div className="flex items-center gap-x-4 *:size-8 [&>a]:hover:scale-150 [&>a]:transition-transform">
        {skillsData.tools.map(({ Icon, url }) => (
          <Link key={url} href={url} target="_blank" rel="noopener noreferrer">
            <Icon />
          </Link>
        ))}
      </div>
      <h2 className="text-4xl font-[Poppins] font-light">
        Databases & Platforms
      </h2>
      <div className="flex items-center gap-x-4 *:size-8 [&>a]:hover:scale-150 [&>a]:transition-transform">
        {skillsData.databases.map(({ Icon, url }) => (
          <Link key={url} href={url} target="_blank" rel="noopener noreferrer">
            <Icon />
          </Link>
        ))}
      </div>
      <h2 className="text-4xl font-[Poppins] font-light">
        Languages & Frameworks
      </h2>
      <div className="flex items-center gap-x-4 *:size-8 [&>a]:hover:scale-150 [&>a]:transition-transform">
        {skillsData.languages.map(({ Icon, url }) => (
          <Link key={url} href={url} target="_blank" rel="noopener noreferrer">
            <Icon />
          </Link>
        ))}
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

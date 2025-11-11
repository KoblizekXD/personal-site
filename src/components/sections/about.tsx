import { offsetIndexAtom } from "@/atoms/offset-index";
import {
  SiC,
  SiIntellijidea,
  SiKotlin,
  SiKubernetes,
  SiReact,
} from "@icons-pack/react-simple-icons";
import { type Easing, motion } from "framer-motion";
import { useAtom } from "jotai";
import Image from "next/image";
import { useEffect, useState } from "react";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.4,
      staggerChildren: 0.6,
      ease: "easeOut" as Easing,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0 },
};

export function AboutPage() {
  const [index, setIndex] = useAtom(offsetIndexAtom);

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (index === 1 && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [index, hasAnimated]);

  return (
    <section id="about" className="flex flex-col p-12 gap-y-4 w-full h-full">
      <motion.div
        variants={container}
        initial="hidden"
        animate={hasAnimated ? "show" : index === 1 ? "show" : "hidden"}
        className="space-y-4 flex flex-col h-full"
      >
        <motion.h1
          className="text-3xl md:text-7xl font-[Poppins] font-light"
          variants={item}
        >
          About Me
        </motion.h1>
        <p className="font-[Poppins] font-light md:text-2xl">
          <motion.span variants={item}>
            Ever since I was a child, I dreamt of building{" "}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              className="font-bold"
            >
              big
            </motion.span>
            .
          </motion.span>
          <br />
          <motion.span variants={item}>
            That's why I started my programming journey at a young age,
            exploring various technologies and languages along the way.
          </motion.span>
        </p>
        <div className="flex-1 flex gap-x-8">
          <motion.div
            className="w-1 bg-gray-600 rounded"
            variants={{
              hidden: { height: 0 },
              show: {
                height: "100%",
                transition: { duration: 0.8, ease: "linear" },
              },
            }}
          />
          <div className="flex flex-col my-8 justify-between">
            <motion.p
              className="font-[Poppins] font-light text-sm md:text-lg max-w-3xl flex items-center gap-x-4"
              variants={item}
            >
              <Image
                src={"/visualstudio.svg"}
                alt="visual studio 2022"
                height={32}
                width={32}
              />
              It all started with Visual Studio and Windows Forms
            </motion.p>
            <motion.p
              className="font-[Poppins] font-light text-sm md:text-lg max-w-3xl flex items-center gap-x-4"
              variants={item}
            >
              <SiIntellijidea />
              My journey continued with making Minecraft mods using Java and
              IntelliJ IDEA
            </motion.p>
            <motion.p
              className="font-[Poppins] font-light text-sm md:text-lg max-w-3xl flex items-center gap-x-4"
              variants={item}
            >
              <SiReact color="#61DAFB" />I also build applications using React
              and Next.js
            </motion.p>
            <motion.p
              className="font-[Poppins] font-light text-sm md:text-lg max-w-3xl flex items-center gap-x-4"
              variants={item}
            >
              <SiC color="#A8B9CC" />
              Throughout my journey, I have also fell in love with C and systems
              programming, building low-level applications and simple operating
              systems!
            </motion.p>
            <motion.p
              className="font-[Poppins] font-light text-sm md:text-lg max-w-3xl flex items-center gap-x-4"
              variants={item}
            >
              <SiKotlin color="#7F52FF" />I also touched mobile development with
              Kotlin!
            </motion.p>
            <motion.p
              className="font-[Poppins] font-light text-sm md:text-lg max-w-3xl flex items-center gap-x-4"
              variants={item}
            >
              <SiKubernetes color="#326CE5" />
              And currently, I am exploring Kubernetes and DevOps!
            </motion.p>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-center">
          <motion.button
            variants={item}
            className="cursor-pointer rounded-full bg-white/10 px-6 py-4 text-xl font-[Poppins]"
            type="button"
            onClick={() => setIndex((prev) => prev + 1)}
          >
            So what are my skills?
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

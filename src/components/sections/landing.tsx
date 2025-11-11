import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { offsetIndexAtom } from "@/atoms/offset-index";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0 },
};

const button = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export function LandingPage() {
  const [_, setIndex] = useAtom(offsetIndexAtom);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      id="landing"
      className="flex flex-col p-12 gap-y-4 w-full h-full"
    >
      <motion.h1 className="text-7xl font-[Poppins] font-light" variants={item}>
        Hello! 👋
      </motion.h1>
      <motion.h2 className="font-[Poppins] font-light text-5xl" variants={item}>
        I'm Jan
      </motion.h2>
      <motion.h3 className="font-[Poppins] font-light text-3xl" variants={item}>
        An aspiring{" "}
        {(
          (Date.now() - new Date("08/01/2007").getTime()) /
          1000 /
          60 /
          60 /
          24 /
          365
        ).toFixed(0)}{" "}
        year old Software Engineer from Czech Republic
      </motion.h3>
      <div className="mt-auto flex flex-col font-[Poppins] font-light text-sm text-gray-600">
        <motion.div variants={item} className="ml-auto">
          <h3 className="font-semibold">Tasks</h3>
          <p>I was asked to add this by my teacher (wow), but I think this is pointless 🤷‍♂️ <br /> and will make the site uglier.</p>
          <br />
          <ul>
            <li>- Finish thesis</li>
          </ul>
        </motion.div>
      </div>
      <div className="mt-auto flex items-center justify-center">
        <motion.button
          variants={button}
          className="cursor-pointer rounded-full bg-white/10 px-6 py-4 text-xl font-[Poppins]"
          type="button"
          onClick={() => setIndex((prev) => prev + 1)}
        >
          Let's build something amazing!
        </motion.button>
      </div>
    </motion.div>
  );
}

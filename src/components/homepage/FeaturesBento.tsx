import { BadgeCheckIcon, Clock10Icon, HeartHandshakeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const developerTools = [
  {
    name: "VS Code",
    description: "Popular code editor with extensive plugin support",
  },
  {
    name: "Git",
    description: "Distributed version control system for tracking changes",
  },
  { name: "npm", description: "Package manager for JavaScript and Node.js" },
  {
    name: "Docker",
    description: "Platform for developing, shipping, and running applications",
  },
  { name: "Postman", description: "API development and testing tool" },
];

const blockchains = [
  {
    name: "Ethereum",
    description:
      "Decentralized, open-source blockchain with smart contract functionality",
  },
  {
    name: "Solana",
    description:
      "High-performance blockchain supporting smart contracts and DeFi",
  },
  {
    name: "Polkadot",
    description:
      "Multi-chain network enabling interoperability between different blockchains",
  },
  {
    name: "Cardano",
    description:
      "Blockchain platform for changemakers, innovators, and visionaries",
  },
  {
    name: "Avalanche",
    description:
      "Open-source platform for launching decentralized finance applications",
  },
];

const databaseSystems = [
  {
    name: "PostgreSQL",
    description: "Open-source relational database management system",
  },
  { name: "MongoDB", description: "Document-oriented NoSQL database" },
  {
    name: "Redis",
    description:
      "In-memory data structure store used as database, cache, and message broker",
  },
  {
    name: "Cassandra",
    description:
      "Distributed NoSQL database for handling large amounts of data",
  },
  { name: "Neo4j", description: "Graph database management system" },
];

const features = [
  {
    Icon: HeartHandshakeIcon,
    name: "Driving Adoption",
    description:
      "Rupabase lowers the entry barrier for developers to build data-driven dApps",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BadgeCheckIcon,
    name: "Improving Developer Experience",
    description:
      "Streamlines the development process and reduces time-to-market for dApps",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:25s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {developerTools.map((tool, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-40 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <figcaption className="text-sm font-medium dark:text-white">
              {tool.name}
            </figcaption>
            <blockquote className="mt-2 text-xs">{tool.description}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: HeartHandshakeIcon,
    name: "Future Vision",
    description:
      "Leverage Rupabase's data availability and rollup capabilities to host decentralized databases & empower the Web3 developer community.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:30s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {blockchains.map((blockchain, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <figcaption className="text-sm font-medium dark:text-white">
              {blockchain.name}
            </figcaption>
            <blockquote className="mt-2 text-xs">
              {blockchain.description}
            </blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Clock10Icon,
    name: "Promoting Interoperability",
    description: "Supports multiple database systems and dApp frameworks",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {databaseSystems.map((db, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-36 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <figcaption className="text-sm font-medium dark:text-white">
              {db.name}
            </figcaption>
            <blockquote className="mt-2 text-xs">{db.description}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
];

export function FeaturesBento() {
  return (
    <BentoGrid className="w-[60%]">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

import { Layout } from '../components/layout';
import authorPic from '../public/imgs/avatar-removed-bg.png';
import { Anchor1, Text1, Title1 } from '../components/common/shared';
import { formatDistance, formatDistanceToNowStrict } from 'date-fns';

const appearOnScreenVariants: Variants = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1 },
};

const cardVariants: Variants = {
  offscreen: {
    y: 150,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function Home() {
  const scrollRef = React.useRef(null);

  return (
    <Layout ref={scrollRef}>
      <Head>
        <title>Full stack Node.js developer next</title>
        <meta
          name="description"
          content="Full Stack Node.js, developer, software enginerr, front-end developer, back-end developer, dev, node.js developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ root: scrollRef }}
        variants={appearOnScreenVariants}
        className="p-4 gap-4"
      >
        <Title1>Welcome, My name is Serhii Kuzmych.</Title1>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ root: scrollRef }}
        variants={appearOnScreenVariants}
        className="flex flex-col sm:flex-row p-4 gap-4"
      >
        <div className="basis-full order-2 sm:order-1 sm:basis-6/12 flex flex-col gap-4 items-center justify-center">
          <div className="d-flex flex-col">
            <Text1>
              I&apos;m Full Stack Javascript developer based in Lviv, Lviv
              Oblast, UA.
            </Text1>
            <Text1 className="mt-4">
              With more than 5 years of hands-on experience in full-stack
              development, I have a proven track record of delivering successful
              projects across various domains, including crypto, cyber security,
              online marketplaces, blogs, and real-time applications.
            </Text1>
          </div>
        </div>
        <div className="basis-full order-1 sm:order-2 sm:basis-6/12 flex flex-col gap-5 items-center">
          <div className="max-w-xs sm:w-72">
            <Image src={authorPic} alt="sergiycheck"></Image>
          </div>

          <div>
            <ul>
              <li className="flex gap-2">
                <Text1>Gmail:</Text1>
                <Anchor1
                  href="mailto:sergiycheck@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  sergiycheck@gmail.com
                </Anchor1>
              </li>
              <li className="flex gap-2">
                <Text1>LinkedIn:</Text1>
                <Anchor1
                  href="https://linkedin.com/in/serhiikuzmych/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Serhii Kuzmych
                </Anchor1>
              </li>
              <li className="flex gap-2">
                <Text1>Github:</Text1>
                <Anchor1
                  href="https://github.com/sergiycheck"
                  target="_blank"
                  rel="noreferrer"
                >
                  sergiycheck
                </Anchor1>
              </li>
              <li className="flex gap-2">
                <Text1>Telegram:</Text1>
                <Anchor1
                  href="https://t.me/Serhii_Kuzmych"
                  target="_blank"
                  rel="noreferrer"
                >
                  @Serhii_Kuzmych
                </Anchor1>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* experience 1 */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="flex flex-col gap-10 p-4"
        variants={cardVariants}
      >
        <motion.div>
          <Text1 className="font-bold">IPOFUNNEL (Full-stack Node.js)</Text1>
          <Text1>
            March 2022 - Present time{' '}
            {formatDistanceToNowStrict(new Date(2022, 3, 1))}
          </Text1>

          {/* Project: Bitoftrade */}
          <ul className="mt-4 space-y-4 text-gray-500 list-disc list-inside dark:text-gray-200">
            <li>
              Project: Bitoftrade
              <ol className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  Design & implementation of more than 3 products - configured
                  data fetching from remote APIs
                </li>
                <li>Trading view integration</li>
                <li>Business logic implementation on the FE & BE sides</li>
                <li>Customizable and pluggable crypto widget implementation</li>
                <li>
                  Storing and processing transactions data on the BE side,
                  interaction with smart contracts
                </li>
                <li>Testing of the BE and FE</li>
                <li>CI/CD configuration</li>
                <li>Performance optimization</li>
                <li>Refactoring and code improvements</li>
                <li>Code review, feature discussions</li>
                <li>Creating documentation</li>
                <li>
                  A lot of small fixes and features on the BE and FE, auth,
                  users, other entities
                </li>
                <li>BE and FE project creation and configuration</li>
                <li>UI layout implementation</li>
              </ol>
            </li>
          </ul>
          {/*  Project: Tokenframe */}
          <ul className=" mt-4 space-y-4 text-gray-500 list-disc list-inside dark:text-gray-200">
            <li>
              Project: Tokenframe
              <ol className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>BE and FE project creation and configuration</li>
                <li>
                  Configuration of fetching and storing data from remote API
                  providers - business logic implementation FE & BE sides
                </li>
                <li>
                  Technical implementation of interaction with IoT devices
                </li>
                <li>Testing & code review, CI/CD</li>
                <li>
                  Crypto wallets integration, interaction with smart contracts
                </li>
                <li>Interactive animated UI elements implementation</li>
                <li>
                  A lot of small fixes and features on the BE and FE, auth,
                  users, other entities
                </li>
                <li>UI layout implementation</li>
              </ol>
            </li>
          </ul>
          {/* Project: PIXEL NFT */}
          <ul className=" mt-4 space-y-4 text-gray-500 list-disc list-inside dark:text-gray-200">
            <li>
              Project: PIXEL NFT
              <ol className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>BE and FE project creation and configuration</li>
                <li>
                  Creating selectable 10k x 10k cells grid for NFT purchase -
                  Wallets, Web3 providers integration
                </li>
                <li>Configuration of data management, storing & fetching</li>
                <li>Testing & code review, CI/CD</li>
                <li>
                  A lot of small fixes and features on the BE and FE, auth,
                  users, other entities
                </li>
              </ol>
            </li>
          </ul>
          {/* Project: Cyber security platform */}
          <ul className=" mt-4 space-y-4 text-gray-500 list-disc list-inside dark:text-gray-200">
            <li>
              Project: Cyber security platform
              <ol className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>Design implementation</li>
                <li>Implementation of protection mechanism</li>
                <li>
                  Using AWS ML services to detect vulnerabilities - Long
                  processing task handling
                </li>
                <li>Integration tests</li>
                <li>FE & BE feature development</li>
              </ol>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* experience 2 */}
      <motion.div
        whileInView="onscreen"
        viewport={{ once: true }}
        initial="offscreen"
        className="flex flex-col gap-10 p-4"
        variants={cardVariants}
      >
        <motion.div>
          <Text1 className="font-bold">
            Full Stack Node.js Engineer, Synergy Way
          </Text1>
          <Text1>
            May 2021 — March 2022{' '}
            {formatDistance(new Date(2021, 7, 1), new Date(2022, 3, 1))}
          </Text1>

          {/* Social platform */}

          <ul className=" space-y-4 text-gray-500 list-disc list-inside dark:text-gray-200">
            <li>
              Project: Social platform
              <ol className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>DB, BE, FE design & implementation</li>
                <li>
                  Users auth, posts, and other business entities implementation,
                  FE & BE, pagination, lazy loading, caching
                </li>
                <li>Real-time communication development</li>
                <li>File upload with AWS S3</li>
                <li>Social seamless login</li>
                <li>Testing FE, BE</li>
                <li>Code review & feature discussion, CI/CD</li>
              </ol>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* experience 3 */}
      <motion.div
        whileInView="onscreen"
        viewport={{ once: true }}
        initial="offscreen"
        className="flex flex-col gap-10 p-4"
        variants={cardVariants}
      >
        <motion.div>
          <Text1 className="font-bold">
            Full Stack Engineer at Kyiv Polytechnic Institute, Kiev
          </Text1>
          <Text1>
            May 2019 — June 2021{' '}
            {formatDistance(new Date(2019, 6, 1), new Date(2021, 6, 1))}
          </Text1>

          {/* Project: Educational*/}

          <ul className=" space-y-4 text-gray-500 list-disc list-inside dark:text-gray-200">
            <li>
              Project: Educational
              <ol className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  Creating internal educational projects, such as a student
                  marks and attendance system, which is used by teachers and
                  students to track their progress, and also by administration
                  to track students progress and attendance
                </li>
                <li>
                  Participating in a campus project, which is a platform for
                  students and teachers to communicate and share information,
                  including web API creation, database management, front-end
                  development with WPF, and back-end development with ASP.NET
                  Core
                </li>
                <li>MS SQL Server and Oracle database management</li>
                <li>Code review & refactoring & feature discussion</li>
              </ol>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </Layout>
  );
}

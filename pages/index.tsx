import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

import { Layout } from '../components/layout';
import authorPic from '../public/imgs/me.png';
import { Anchor1, Text1, Title1 } from '../components/common/shared';

const apperOnScreenVariants: Variants = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1 },
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
        variants={apperOnScreenVariants}
        className="p-4 gap-4"
      >
        <Title1>Welcome, My name is Serhii Kuzmych.</Title1>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ root: scrollRef }}
        variants={apperOnScreenVariants}
        className="flex flex-col sm:flex-row p-4 gap-4"
      >
        <div className="basis-full order-2 sm:order-1 sm:basis-6/12 flex flex-col gap-4 items-center justify-center">
          <div className="d-flex flex-col">
            <Text1>
              I&apos;m Full Stack Node.js developer based in Novovolynsk, Volyn,
              UA.
            </Text1>
            <Text1>2 + years experince of work.</Text1>
            <Text1>
              Developing scalable and secure client and server side
              applications.
            </Text1>
            <Text1>
              Have knowledge and experience with creating Node.js full stack
              projects from scratch, database creation and interaction,
              interaction with third-party web apis, using AWS and GCP cloud
              services, application containerization, covering client and server
              side apps with tests, deployment, ci/cd process.
            </Text1>
            <Text1>
              Detail-oriented and deep understanding in such languages
              Typescript, Javascript, Sql, Bash scripts, Yml.
            </Text1>
            <Text1>
              Good organization and listening and communication skills.
              Attentive to details.
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

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="flex flex-col gap-10 p-4"
        variants={apperOnScreenVariants}
      >
        <motion.div className="font-medium ">
          <Text1 className="font-bold">Cyberflip (Full-stack Node.js)</Text1>
          <Text1>August 2022 - Present time (December 2022)</Text1>
          <Text1>
            Implementing features on the back-end with NestJs, Postgresql. Using
            Jenkins to configure pipelines. Using google sql. Implementing
            features on the front-end side with Reactjs, refactoring the
            project. Redux-toolkit integration with Rtk- query. Testing the
            project with Cypress. Gitlab pipeline impementation. Developing web3
            login with providers. Deploy with firebase and google cloud build.
            Learning google cloud technologies, NestJs, React, Cypress, Gitlab.
            Taking part in daily meetings and features discussion. Interviewing
            candidates.
          </Text1>
        </motion.div>
      </motion.div>
    </Layout>
  );
}

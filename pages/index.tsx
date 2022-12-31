import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

import { Layout } from '../components/layout';
import authorPic from '../public/imgs/me.png';

const apperOnScreenVariants: Variants = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1 },
};

export default function Home() {
  return (
    <Layout>
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
        viewport={{ once: true, amount: 0.8 }}
        variants={apperOnScreenVariants}
      >
        <div className="flex flex-col sm:flex-row">
          <div className="basis-full order-2 sm:order-1 sm:basis-6/12 flex flex-col gap-4 items-center justify-center">
            <h1 className="text-5xl">Welcome, My name is Serhii Kuzmych.</h1>
            <div>
              <p>
                I&apos;m Full Stack Node.js developer based in Novovolynsk,
                Volyn, UA.
              </p>
              <p>2 + years experince of work.</p>
              <p>
                Developing scalable and secure client and server side
                applications.
              </p>
              <p>
                Have knowledge and experience with creating Node.js full stack
                projects from scratch, database creation and interaction,
                interaction with third-party web apis, using AWS and GCP cloud
                services, application containerization, covering client and
                server side apps with tests, deployment, ci/cd process.
              </p>
              <p>
                Detail-oriented and deep understanding in such languages
                Typescript, Javascript, Sql, Bash scripts, Yml.
              </p>
              <p>
                Good organization and listening and communication skills.
                Attentive to details.
              </p>
            </div>
          </div>
          <div className="basis-full order-1 sm:order-2 sm:basis-6/12 flex flex-col gap-5 items-center">
            <div className="max-w-xs sm:w-72">
              <Image src={authorPic} alt="sergiycheck"></Image>
            </div>

            <div>
              <ul>
                <li>Gmail: sergiycheck@gmail.com</li>
                <li>
                  <a
                    className="underline"
                    href="https://linkedin.com/in/serhiikuzmych/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="underline"
                    href="https://github.com/sergiycheck"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  Telegram:{' '}
                  <a
                    className="underline"
                    href="https://t.me/Serhii_Kuzmych"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @Serhii_Kuzmych
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col gap-10">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="rounded-xl p-4"
          variants={apperOnScreenVariants}
        >
          <motion.div className="font-medium ">
            <p className="font-bold">Cyberflip (Full-stack Node.js)</p>
            <p>August 2022 - Present time (December 2022)</p>
            <p>
              Implementing features on the back-end with NestJs, Postgresql.
              Using Jenkins to configure pipelines. Using google sql.
              Implementing features on the front-end side with Reactjs,
              refactoring the project. Redux-toolkit integration with Rtk-
              query. Testing the project with Cypress. Gitlab pipeline
              impementation. Developing web3 login with providers. Deploy with
              firebase and google cloud build. Learning google cloud
              technologies, NestJs, React, Cypress, Gitlab. Taking part in daily
              meetings and features discussion. Interviewing candidates.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}

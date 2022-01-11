import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from "../components/Profile"
import { CompletedChanllenges } from "../components/CompletedChallenges"
import { Countdown } from "../components/Countdown"
import { ChallengeBox } from "../components/ChallengeBox"
import Head from 'next/head'

import styles from "../styles/pages/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChanllenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
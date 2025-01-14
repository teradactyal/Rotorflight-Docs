import React from 'react';
import ReactPlayer from 'react-player'
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Rotorflightsvg from '/img/Rotorflight3.svg';
import BGV from '/img/BGV.webm'
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
        <header className={clsx('box', styles.box)}>
            <div className={clsx('wrapper', styles.wrapper)}>
                <video src={BGV} className={clsx('Video', styles.video)} loop autoPlay muted/>
                <box className={clsx('overlay', styles.overlay)}>
                </box>
                <div className={clsx('Banner', styles.Banner)}>
                    <h1 className={styles.Svg}><Rotorflightsvg /></h1>
                </div>
            </div>
        </header>

  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Homepage`}
      description="Opensource Helicopter Flight Controller <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

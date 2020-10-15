import React from 'react'
import Link from 'next/link'

import maps from '@src/config/maps'
import { greyDark, orange300, orange400, darkColor } from '@src/styles/colors';
import routes from '@src/config/routes'

import TypistWrapper from './TypistWrapper'

const currentMaps = () =>
  maps.types.map(i => i.displayName)

const HeaderText = () => (
  <div className="title-container">
    <h1 className="title">
      创建动态可视化数据视频{' '}

      <div className="typist">
        <TypistWrapper words={currentMaps()} />
      </div>
    </h1>

    <Link href={routes.editor}>
      <a className="button">开始创建</a>
    </Link>

    <style jsx>{`
      .title-container {
        max-width: 500px;
        margin-right: 0;
        margin-top: 45px;
        margin-bottom: 50px;
      }

      .title {
        padding: 15px;
        color: gray;
        line-height: 1.2em;
        height: 3.6em;
        text-align: left;
        margin-bottom: 10px;
      }

      .typist {
        display: inline-block;
      }

      .button {
        margin: 40px 0;
        margin-top: 10px;
        background: ${orange300};
        color: #eeeeee;
        border-radius: 0px;
        border-width: 0;
        width: 200px;
        font-size:18px;


      }

      .button:hover {
        background: ${orange400};
      }

      @media only screen and (min-width: 48em) {
        .title-container {
          margin-right: 50px;
          margin-top: 0;
          margin-bottom: 0;
        }
      }
    `}</style>
  </div>
)

export default HeaderText;

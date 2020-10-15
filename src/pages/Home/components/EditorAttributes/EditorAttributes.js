import React from 'react'

import { grey300 } from '@src/styles/colors';

import AttributeItem from './components/AttributeItem'

const EditorAttributes = () =>
  <div className="row center-xs">
    <div className="col-xs-10">
      <div className="EditorAttributes__container">
        <div className="row around-xs">
          <AttributeItem
            iconName="sheet.svg"
            text="上传数据"
          />
          <AttributeItem
            iconName="mixer.svg"
            text="定制样式"
          />
          <AttributeItem
            iconName="arrows.svg"
            text="保存下载"
          />
        </div>
      </div>
    </div>

    <style jsx>{`
      .EditorAttributes__container {
        margin-left: -150px;
        margin-right: -150px;
        padding: 0 100px 40px 100px;
        font-size: 18px;
        text-transform: uppercase;
        color: grey-color-600;
        border-bottom: 1px solid ${grey300};
      }
    `}</style>
  </div>

export default EditorAttributes

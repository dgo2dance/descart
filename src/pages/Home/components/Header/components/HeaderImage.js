import React from 'react';

function HeaderImage() {
  return (
    <div className="image-container">
      <img
        className="image"
        src="/static/images/landing-page/animation_2.gif"
        alt="datamaps-editor"
      />

    <style jsx>{`
      .image-container {
        margin-bottom: 60px;
      }

      .image {
        max-width: 1000px;
        width: 100%;
        height: auto;
      }

      @media only screen and (min-width: 48em) {
        .image-container {
          margin-bottom: 0;
          margin-left: 50px;
        }
      }
    `}</style>
    </div>
  );
}

export default HeaderImage;

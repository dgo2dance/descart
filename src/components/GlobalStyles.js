import React from 'react';

import { purple600, greyDark } from '@src/styles/colors';

function GlobalStyles() {
  return (
    <div>
      <style jsx global>{`
        html {
          height: 100%;
        }

        body {
          height: 100%;
        }

        h4 {
          margin-bottom: 0 !important;
        }

        p {
          margin-bottom: 0;
        }

        .map-select .Select-control {
          height: 40px;
        }

        .data-classification .Select-control {
          border-color: ${purple600};
        }

        .ReactModal__Body--open {
          overflow: hidden;
        }

        .box-shadow {
          box-shadow: 0px 2px 4px 0px ${greyDark};
        }

        .NumericInput__input {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          padding-left: 15px;
        }

        .NumericInput__input:focus {
          border: 1px solid #33C3F0 !important;
        }

        .NumericInput__table-input {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          padding-left: 15px;
          border: 0 !important;
          border-radius: 0 !important;
        }

        .NumericInput__table-input:focus {
          border: 1px solid #33C3F0 !important;
        }

        @media only screen and (max-width: 48em) {
          .hide-xs {
            display: none;
          }
        }

        @media only screen and (min-width: 48em) {
          .show-xs {
            display: none;
          }
        }

        @media only screen and (max-width: 950px) {
          .hide-sm {
            display: none;
          }
        }

        @media only screen and (min-width: 950px) {
          .show-sm {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default GlobalStyles;

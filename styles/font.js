import { css } from '@emotion/react'

// import of all files
import Gilroy_Bold_ttf from '../fonts/Gilroy/Gilroy-Bold.ttf'
import Gilroy_Bold_woff from '../fonts/Gilroy/Gilroy-Bold.woff'
import Gilroy_Bold_woff2 from '../fonts/Gilroy/Gilroy-Bold.woff2'
import Gilroy_medium_ttf from '../fonts/Gilroy/Gilroy-Medium.ttf'
import Gilroy_medium_woff from '../fonts/Gilroy/Gilroy-Medium.woff'
import Gilroy_medium_woff2 from '../fonts/Gilroy/Gilroy-Medium.woff2'
import Gilroy_regular_ttf from '../fonts/Gilroy/Gilroy-Regular.ttf'
import Gilroy_regular_woff from '../fonts/Gilroy/Gilroy-Regular.woff'
import Gilroy_regular_woff2 from '../fonts/Gilroy/Gilroy-Regular.woff2'
import Gilroy_semibold_ttf from '../fonts/Gilroy/Gilroy-SemiBold.ttf'

export const fontStyles = css`
    @font-face {
        font-family: 'Gilroy-bold';
        font-display: auto;
        src: url(${Gilroy_Bold_woff2}) format('woff2'),
            url(${Gilroy_Bold_woff}) format('woff'),
            url(${Gilroy_Bold_ttf}) format('truetype');
        font-weight: 700;
        font-style: bold;
        text-rendering: optimizeLegibility;
    }

    @font-face {
        font-family: 'Gilroy-semibold';
        font-display: auto;
        src: url(${Gilroy_semibold_ttf}) format('truetype');
        font-weight: 600;
        font-style: normal;
        text-rendering: optimizeLegibility;
    }

    @font-face {
        font-family: 'Gilroy-medium';
        font-display: auto;
        src: url(${Gilroy_medium_woff2}) format('woff2'),
            url(${Gilroy_medium_woff}) format('woff'),
            url(${Gilroy_medium_ttf}) format('truetype');
        font-weight: 500;
        font-style: normal;
        text-rendering: optimizeLegibility;
    }

    @font-face {
        font-family: 'Gilroy';
        font-display: auto;
        src: url(${Gilroy_regular_woff2}) format('woff2'),
            url(${Gilroy_regular_woff}) format('woff'),
            url(${Gilroy_regular_ttf}) format('truetype');
        font-weight: 400;
        font-style: normal;
        text-rendering: optimizeLegibility;
    }
`

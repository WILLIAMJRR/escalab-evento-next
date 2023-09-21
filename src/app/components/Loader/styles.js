import styled from '@emotion/styled'

// Import global variables
import { variables } from '../../../../styles/variables'

// Import animations
import {
  animationCircleL,
  animationCircleW,
  animationCircleD,
  animationTriangleW,
  animationTriangleB,
  animationBorderW,
  animationBorderB
} from '../../../../styles/animatios'

export const Modal = styled.div`
    position: fixed;
    top: 0;
    z-index: 2000001;


    width: 100%;
    height: 100vh;
    background: ${variables.colors.darkBlue};
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.5s;

    &.hidden {
        opacity: 0;
        visibility: hidden;
    }

    /* Principal container in the Animation */
    .container {
        width: 100px;
        height: 100px;

        /* Flex to align al items on the container */
        display: flex;
        justify-content: center;
        align-items: center;

        /* Relative to center all container with a absolute Position */
        position: relative;
    }

    /* circles content On the animation */
    /* Global styles each circle principal */
    .circle {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .circleBlueL {
        background: ${variables.colors.lightBlue};
        animation: ${animationCircleL} 4s ease-in-out infinite;
    }
    .circleWhite {
        background: ${variables.colors.titleColor};
        animation: ${animationCircleW} 4s ease-in-out infinite;
    }
    .circleBlueD {
        background: ${variables.colors.darkBlue};
        animation: ${animationCircleD} 4s ease-in-out infinite;
    }

    /* Triangle styles with her respective animations */
    .containTriangle {
        width: 50%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    /* Global styles of both triangles */
    .triangle {
        position: absolute;
        width: 35px;
        height: 35px;
        transform-origin: bottom left;
    }
    .triangleWhite {
        left: 2px;
        animation: ${animationTriangleW} 4s ease-in-out infinite;
    }
    .triangleBlue {
        right: 2px;
        animation: ${animationTriangleB} 4s ease-in-out infinite;
    }
`

export const Border = styled.div`
    /* Border On the principal animations part */
    /* Global styles of both borders */

    width: 120%;
    height: 120%;
    padding: 20px;

    border: 2px solid white;
    border-radius: 50%;
    border-color: transparent;
    position: absolute;

    transform: rotate(-45deg);
    opacity: 0;

    &.borderWhite {
        border-right-color: white;
        animation: ${animationBorderW} 3.5s 1s ease-in-out infinite forwards;
    }

    &.borderBlue {
        border-right-color: ${variables.colors.lightBlue};
        animation: ${animationBorderB} 3.5s 1s ease-in-out infinite forwards;
    }
`

export const BorderRadious = styled.span`
    position: absolute;

    display: block;
    width: 2px;
    height: 2px;
    border-radius: 50%;

    .borderRadiusWTop {
        right: 18.6px;
        top: 19px;
        background: ${variables.colors.titleColor};
    }
    .borderRadiusWBottom {
        right: 18.6px;
        bottom: 19px;
        background: ${variables.colors.titleColor};
    }
    .borderRadiusBTop {
        right: 18.6px;
        top: 19px;
        background: ${variables.colors.lightBlue};
    }
    .borderRadiusBBottom {
        right: 18.6px;
        bottom: 19px;
        background: ${variables.colors.lightBlue};
    }
`

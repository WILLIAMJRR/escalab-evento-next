import { keyframes } from '@emotion/react'
// animation of the icon the lenguague
export const LenguagueAnim = keyframes`
    0%,100%{
        transform: unset;
    }
    50%{
        transform:translateY(-10px);
    }
`
// animation of the texts first
export const TextAnimFirst = keyframes`
    0%,10%{
        opacity:0;
        clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    }
    45%{
        opacity:1;
    }
    50%{
        opacity:1;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
    75%,100%{
        opacity:0;
    }
`
// animation of the line fisrt the texts
export const LineAnimFirst = keyframes`
    0%{
        opacity:0;
        transform: translateX(0px);
        transform: scale(0);
    }
    10%{
        opacity:1;
        transform: translateX(0px);
        transform: scale(1);
    }
    45%{
        opacity:1;
    }
    50%{
        opacity:0;
        transform: translateX(510px);
    }
    75%,100%{
        transform: translateX(510px);
        opacity:0;
    }
`
// animation of the text second
export const TextAnimSecond = keyframes`
    0%,65%{
        opacity:0;
        clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    }
    66%,69%{
        opacity:1;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
    75%,100%{
        opacity:0;
    }
`
// animation of the line second the texts
export const LineAnimSecond = keyframes`
    0%,65%{
        opacity:0;
        transform: translateX(0px);
        transform: scale(0);
    }
    66%,69%{
        opacity:1;
        transform: scale(1);
        transform: translateX(510px);
    }
    75%,100%{
        transform: translateX(510px);
        opacity:0;
    }
`

// Animations for the loaders

/* Animations for each circle for make a different timing in animation */
/* Animation ligth blue circle */
export const animationCircleL = keyframes`
    0%,100%{
        transform: scale(0);
    }
    10%,90%{
        transform: scale(1.1);
    }
    20%,80%{
        transform: scale(1);
    }
`

/* Animation white circle */
export const animationCircleW = keyframes`
    0%,100%{
        transform: scale(0);
    }
    15%,85%{
        transform: scale(1.1);
    }
    25%,75%{
        transform: scale(1);
    }
`

/* Animation dark blue circle */
export const animationCircleD = keyframes`
    0%,100%{
        transform: scale(0);
    }
    20%,80%{
        transform: scale(1.2);
    }
    30%,70%{
        transform: scale(1.1);
    }
`

/* Animation for each triangle for different timings on the animation */
/* Animation White Triangle */
export const animationTriangleW = keyframes`
    0%, 100%{
        transform: scale(0);
        opacity: 0;
    }
    20%,80%{
    transform: scale(1.1);
    opacity: 1;
    }
    30%,70%{
    transform: scale(1);
    }
`

/* Animation blue Triangle */
export const animationTriangleB = keyframes`
    0%, 100%{
        transform: scale(0);
        opacity: 0;
    }
    25%,75%{
    transform: scale(1.1);
    opacity: 1;
    }
    35%,65%{
    transform: scale(1);
    }
`

/* Animation for each border  */
export const animationBorderW = keyframes`
    0%,70%{
        opacity: 0;
        transform: rotate(0deg);
    }
    30%{
        opacity: 1;
    }
    35%{
        opacity: 0;
        transform: rotate(270deg);
    }
    55%{
        opacity: 1;
    }
`
export const animationBorderB = keyframes`
    0%,70%{
        opacity: 0;
        transform: rotate(0deg);
    }
    35%{
        opacity: 1;
    }
    40%{
        opacity: 0;
        transform: rotate(270deg);
    }
    60%{
        opacity: 1;
    }
`

// /Animations for the loaders

// Animation of logo insign on FORM VIEW
export const LogoAnimation = keyframes`
    0%, 100%{
        transform: scale(0) translateY(0px);
    }
    10%{
        transform: scale(1.2);
    }
    20%{
        transform: scale(1);
    }
    35%, 70%{
        transform: scale(1) translateY(-10px);
    }
    50%, 85%{
        transform: scale(1) translateY(10px);
    }
`

// Animation Icon check from tanks your pages

export const animationIcon = keyframes`


    0% {
		transform: scale3d(1, 1, 1);
	}

	30% {
		transform: scale3d(1.25, 0.75, 1);
	}

	40% {
		transform: scale3d(0.75, 1.25, 1);
	}

	50% {
		transform: scale3d(1.15, 0.85, 1);
	}

	65% {
		transform: scale3d(0.95, 1.05, 1);
	}

	75% {
		transform: scale3d(1.05, 0.95, 1);
	}

	100% {
		transform: scale3d(1, 1, 1);
}

`

export const animationMentor = keyframes`
    0%,45%,55%,100%{
        transform: translateX(0px);
        opacity:1;
    }
    20%,30%{
        transform: translateX(100px);
        opacity:0;
    }
    70%,80%{
        transform: translateX(-100px);
        opacity:0;
    }
`

// animation banner sales
export const efectBlur = keyframes`
    0%,100%{
        filter: brightness(100%);

    }
    50%{
        filter: brightness(200%);
    }
`

export const scaleCar = keyframes`
    0%,100%{
       transform: scale(1);
    }
    50%{
        transform: scale(1.1);
    }
`

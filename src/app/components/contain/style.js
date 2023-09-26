import styled from '@emotion/styled'

// import variables of colors
import { variables } from '../../../../styles/variables'

// import animations
import { animationMentor } from '../../../../styles/animatios'

export const HeaderFreeCourseContain = styled.section`
    position: relative;
    margin-top: 63px;
    width: 100%;
    height: 580px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${variables.colors.darkBlue};

    @media (max-width: 600px) {
        height: 145vh;
    }

    .headerContainElements {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2.5rem;

        @media (max-width: 600px) {
            width: 100%;
            flex-direction: column-reverse;
            overflow: hidden;
        }

        .headerContainImage {
            width: 500px;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            @media (max-width: 600px) {
                width: 100%;
                height: 368px;
            }
            .bgHeader {
                width: 100%;
                opacity: 80%;
                transform: translateY(-50px);

                @media (max-width: 600px) {
                    transform: translateY(-20px);
                }
            }
            .moveImage {
                position: absolute;
                bottom: -65px;
                height: 100%;
                object-fit: contain;
                animation: ${animationMentor} 5s 0.2s ease-in-out infinite;
                pointer-events: none;
            }
            .moveImage:nth-child(2) {
                animation: ${animationMentor} 5s ease-in-out infinite;
            }
        }

        .headerContainText {
            width: 60%;
            min-width: 360px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            gap: 1.2rem;

            @media (max-width: 600px) {
                width: 100%;
                height: auto;
                margin-top: 150px;
                justify-content: flex-start;
                align-items: center;
            }
            .mentorFocus {
                flex-direction: column;
                gap: 0;
                font-weight:300;

                @media (max-width: 600px) {
                    justify-content: center;
                }
                h3 {
                     font-weight:600;
                    @media (max-width: 600px) {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column-reverse;
                    }
                }
            }
            .bunddle {
                background: #fff;
                width: 140px;
                height: 35px;
                border-radius: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.6rem;

                h6 {
                    font-size: 12px;
                    letter-spacing: 1px;
                    text-align: center;
                    font-weight: 700;
                }
                img {
                    width: 20px;
                }
            }
            h2 {
                font-size: 22px;
                font-weight: 300;
                color: #fff;
            }
            h1 {
                width: 100%;
                max-width: 700px;
                font-size: 41px;
                color: #fff;

                @media (max-width: 600px) {
                    width: auto;
                    font-size: 35px;
                    text-align: center;
                }
                .TextStrong {
                    font-weight: 700;
                }
            }
            figure {
                width: 100px;
                margin-left: 10px;

                img {
                    width: 100%;
                    object-fit: contain;
                }
            }
            h3 {
                font-size: 18px;
                font-weight: 700;
                color: #fff;
                display: flex;

                figure {
                    margin-right: 10px;
                    width: 20px;
                }
                @media (max-width: 600px) {
                    font-size: 16px;
                }
            }
            p {
                font-size: 15px;
                color: #fff;
                @media (max-width: 600px) {
                    font-size: 14px;
                    text-align: center;
                }
            }
            div {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;

                @media (max-width: 600px) {
                    justify-content: center;
                }
            }
        }
        .sponsor {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: row;
            margin-top: 2rem;
            .contain__image {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 4rem;

                @media (max-width: 600px) {
                    flex-direction: column;
                    margin-right: 0rem;
                }

                h1 {
                    width: auto;
                    color: #94a3b8;
                    font-size: 12px;
                }
                figure {
                    width: 100px;
                    img {
                        width: 100px;
                        object-fit: contain;
                    }
                }
            }

            .onlyUpskilling {
                margin: 0px;
                figure {
                    width: 100px;
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;

                    @media (max-width: 600px) {
                        flex-direction: column;
                    }

                    img {
                        width: 120px;
                        object-fit: contain;
                    }
                }
            }
        }
        .agenda{
            color:white;
            display:flex;
            flex-direction:column;

            @media (max-width: 600px) {
                       padding:0 0.5rem
                    }

            h5{

            @media (max-width: 600px) {
                text-align:center;
                    }
            }

            ul{
                display:flex;
                flex-direction:column;
                gap:1rem;
                li{
                    display:flex;
                    flex-direction:row;
                    gap:1rem;
                    font-size:14px;
                    font-weight:300;
                    color:#fff;

                }
            }

        }
    }

    a {
        position: absolute;
        bottom: -25px;
        left: 18%;
        display: block;
        width: 280px;
        height: 48px;
        background: ${variables.colors.lightBlue};
        text-align: center;
        line-height: 48px;
        font-size: 13px;
        font-weight: 600;
        color: #fff;
        letter-spacing: 2px;
        border-radius: 30px;
        cursor: pointer;
        text-decoration: none;

        @media (max-width: 600px) {
            position: static;
            width: 100%;
            border-radius: 0px;
        }

        &:hover {
            background: #234bbc;
        }
    }
`

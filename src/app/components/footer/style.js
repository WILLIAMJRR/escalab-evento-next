import styled from '@emotion/styled'

import { css } from '@emotion/react'

// import variables
import { variables } from '../../../../styles/variables'

export const FooterS = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;

    border-top: 1px solid ${variables.colors.grey};

    background-color: ${variables.colors.darkBlue};
`

export const ContainerData = styled.section`
    /* Logo styles in the footer */

    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #2d3344;

    figure {
        max-width: 350px;
        padding: 20px 0;
        margin-bottom: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        img {
            width: 60%;
        }
    }

    @media (min-width: 1000px) {
        padding: 30px 120px 60px;
    }
`

// A reusable style
const titleStyle = css`
    font-size: 16px;
    color: ${variables.colors.titleColor};
`

const parragraphStyle = css`
    font-size: 16px;
    color: ${variables.colors.parragraphColor};
`

export const AboutProduct = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 10px;

    //Styles of the labels inside of this component
    div.text {
        width: 280px;
        margin-bottom: 25px;

        h2 {
            ${titleStyle}
            margin-bottom: 12px;
        }
        p {
            ${parragraphStyle}
            opacity: 1;
            margin-bottom: 12px;
        }
    }

    div.social {
        h2 {
            ${titleStyle}
        }
        div.social__grid {
            display: grid;
            grid-template-columns: repeat(3, 75px);
            grid-template-rows: repeat(2, 75px);
            place-items: center;

            a svg {
                transition: 0.2s;
            }
            a:hover svg {
                transition: 0.5s;
                transform: scale(0.5);
            }
        }
    }

    /* Media querys to make a desktop version */
    @media (min-width: 1000px) {
        flex-direction: row;
        justify-content: space-between;

        div.social {
            div.social__grid {
                grid-template-columns: repeat(3, 75px);
                grid-template-rows: repeat(2, 75px);
            }
        }
    }
`

export const Author = styled.section`
    display: flex;
    padding: 20px 0;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 25px;

    /* Element inside of this element */
    h2 {
        ${parragraphStyle}
        font-size: 14px;
        font-weight: normal;
    }

    ul.links {
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        gap: 5px;

        a {
            ${parragraphStyle}
            padding: 0 15px;
            text-decoration: none;
            font-size: 14px;
            font-weight: normal;
            transition: all 0.2s;

            /* Effect hover in the letters footer */
            &:hover {
                color: white;
                transition: all 0.5s;
            }
        }
    }
`

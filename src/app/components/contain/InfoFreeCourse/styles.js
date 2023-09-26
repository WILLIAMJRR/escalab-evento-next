import styled from '@emotion/styled'

export const InfoFreeCourseContain = styled.section`
    width: 100%;
    padding: 7rem 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #f9faff;

    .InfoFreeContainItem {
        width: 60%;
        max-width: 900px;
        background: #fff;
        border: 1px solid #e0e0e0;
        border-bottom: transparent;
        border-radius: 10px 10px 0px 0px;

        @media (max-width: 600px) {
            width: 90%;
        }

        div {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            height: 90px;
            padding-right: 30px;
            border-bottom: 1px solid #e0e0e0;

            @media (max-width: 600px) {
                gap: 2rem;
                height: 120px;
            }

            figure {
                width: 15%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                @media (max-width: 600px) {
                    margin-left: 20px;
                }

                img {
                    width: 50px;
                }
            }
            h1 {
                font-size: 20px;
                font-weight: 600;
                color: #404a61;
                @media (max-width: 600px) {
                    font-size: 18px;
                    padding: 30px 0px;
                }
            }
        }
        div:nth-child(2) {
            display:flex;
            flex-direction:column;
            height: auto;
            padding: 30px;

            @media (max-width: 600px) {
                padding: 20px 30px;
                height: auto;
            }

            p {
                font-size: 1.3rem;
                line-height: 27.5px;
                color: #404a61;
                font-weight: 300;
                margin-bottom:2rem;


                @media (max-width: 600px) {
                    font-size: 14px;
                }
            }
            h4{
                font-size: 1.2rem;
                line-height: 27.5px;
                color: #404a61;
                font-weight: 600;
                margin-bottom:1.5rem;


                @media (max-width: 600px) {
                    font-size: 18px;
                    margin-bottom:0.2rem;
                }
            }
            h5{
                font-size: 1rem;
                line-height: 27.5px;
                color: #404a61;
                font-weight: 600;
                margin-bottom:1.5rem;


                @media (max-width: 600px) {
                    font-size: 14px;
                    margin-bottom:0.2rem;
                }
            }
        }
    }
    a {
        display: block;
        width: 280px;
        height: 48px;
        background: #4e73de;
        text-align: center;
        line-height: 48px;
        font-size: 13px;
        font-weight: 700;
        color: #fff;
        text-decoration: none;
        font-family: Gilroy-semibold;
        letter-spacing: 2px;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 3rem;

        &:hover {
            background: #234bbc;
        }
    }
`

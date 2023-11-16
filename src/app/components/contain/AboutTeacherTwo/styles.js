import styled from '@emotion/styled'

// import needed variables
import { variables } from '../../../../../styles/variables'

export const AboutTeacherS = styled.section`
    width: 100%;
    background-color: ${variables.colors.darkBlue};

    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    padding: 20px;

    @media (max-width: 900px) {
        padding: 50px 0;
        align-items: center;
    }
`

export const AboutWrapper = styled.article`
    width: 90%;
    height: 100%;
    max-width: 1280px;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse ;
    align-items: center;
    padding: 50px 20px;

    @media (max-width: 600px) {
        padding: 0;
        gap: 50px;
    }
    @media (max-width: 1407px) {
        justify-content: center;
        padding: 2rem 0px;
        gap: 50px;
    }
`

// Component with all text in the
export const TextTeacher = styled.div`
    color: white;
    width: 70%;
    max-width: 700px;
    min-width: 300px;
    position: relative;

    //Elements inside this component
    h1 {
        font-size: 1.5rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        a {
            z-index: 2;
            span {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 30px;
                height: 30px;
                border-radius: 30%;
                background-color: white;
                margin-right: 15px;
            }
        }
    }
    .currentWork {
        font-size: 1rem;
        font-weight:300;
        margin: 15px 0;
    }
    .description {
        opacity: 0.8;
        font-size: 1.3rem;
        font-weight:300;
        font-style: italic;
        line-height: 25px;
    }
    .comillas {
        position: absolute;
        opacity: 0.1;
        top: -100px;
        left: -20px;
        transform: rotate(2deg);
    }
    @media (max-width: 780px) {
        .comillas {
            top: -70px;
            left: 0px;
            transform: rotate(10deg);
        }
    }
`

// Container with the photo of the teacher
export const ImgContainer = styled.figure`
    width: 490px;
    height: 337px;
    transform: translateY(-18px);
    img {
        width: 100%;
        height: 126%;
        object-fit: contain;
    }
`

import styled from '@emotion/styled'

export const SpaceForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 100%;
    margin:auto;
    max-width: 580px;
    min-width: 600px;
    height: auto;
    box-shadow: 0 10px 20px 0 rgba(78, 115, 223, 0.05);
    z-index: 5;
    position: relative;
    border-radius: 10px;
    padding: 100px 10px;

    img {
        width: 95px;
    }

    p {
        font-size: 24px;
        font-weight: 500;
        color: #404a61;
        text-align: center;

        @media (max-width: 500px) {
            font-size: 30px;
        }
    }

    div {
        width: 100%;
        padding: 0 20px;
    }

    @media (max-width: 500px) {
        min-width: 350px;
    }
`

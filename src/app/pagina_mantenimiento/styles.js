import styled from '@emotion/styled'

export const Title = styled.h1`
    margin: 25px 0 0;color:white
`

export const ErrorScreenContainer = styled.div`
    background-color:black;
    width:100%;
    height:100vh;
    display: flex;
    padding:230px 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    a{
        color: white;
        background-color:#4e73de;
        border-radius: 5px;
        padding: 10px 20px;
        text-decoration: none;
        font-weight: bold;
        font-size: 20px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        display:flex;
        align-items: start;

    }

    img{
        width: 800px;
    }


    @media (max-width: 750px) {
        img {
            width: 350px;
            padding: 0 10px;
        }
    }
`

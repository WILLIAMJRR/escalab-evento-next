// import styled from "styled-components";
import styled from '@emotion/styled'
import { variables } from '../../../../styles/variables'

export const Navbar = styled.nav`
   width: 100%;
    height: 63px;
    padding: 0 24px;
    border-bottom: 1px solid ${variables.colors.grey};
    /* General color for all texts in this components */
    color: ${variables.colors.titleColor};

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0px;
    z-index: 6;
    background-color: #10172a;

      &.payment {
        z-index: 2000000;
    }

         button {
            transition: all 0.2s;
            border: none;
            border-radius: 5px;
            height: 40px;
            padding: 0 15px;
            font-weight: 300;
            font-size: 1rem;

            color: ${variables.colors.titleColor};
            background-color: ${variables.colors.lightBlue};
            cursor: pointer;

            &.circled {
                border-radius: 20px;
            }

            /* Button hover event  */
            &:hover {
                box-shadow: inset 0 -45px 0 #3962da;
                transition: all 0.5s;
            }
        }

        //Efect hover for navbar elements
        &.a:hover {
            background-color: rgba(0, 0, 0, 0.1);
            box-shadow: inset 0 -5px 0 #4e73de;
            transition: all 0.5s;
        }


    `

export const NavbarWrapperLogo = styled.div`
    width:80%;
    display: flex;
    align-items: center;
    gap: 5px;
    height: 40px;

    img{
        height: 30%;
        width: 60%
    }

`

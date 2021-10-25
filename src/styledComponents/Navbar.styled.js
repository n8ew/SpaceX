import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    height: 11vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.sText}; 

    img {
        width: 300px
    }

    button {
        border: none;
        background-color: inherit;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.sText };
        transition: color 0.2s ease;
    }
    button:hover {
        color: ${({ theme }) => theme.colors.pText};
    }
    button span {
        font-size: 32px;
    }

    @media (max-width: 550px) {
        padding: 0px 20px;
        img {
            width: 200px
        }
    }
`

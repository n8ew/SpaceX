import styled from "styled-components";

interface SpanInterface {
    readonly success?: boolean;
}
interface H4Interface {
    readonly alignRight?: boolean;
    readonly cursor?: number;
}

export const DisplayWrapper = styled.div`
    width: 60%;
    margin: auto;

    @media (max-width: 550px) {
        width: 100%;
    }
`;

export const DetaleStyled = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.sText};
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
    width: 100%;

    .launchDate {
        margin-bottom: 30px;
    }
    .launchSite {
        position: relative;
    }
    .hover:hover + span {
        visibility: visible;
    }

    @media (max-width: 550px) {
        flex-direction: column;
        padding: 20px;

        .left {
            margin-bottom: 30px;
        }
        .launchDate,
        .launchSite {
            display: flex;
            flex-direction: column;
        }
    }
`;

export const H2 = styled.h2`
    color: ${({ theme }) => theme.colors.pText};
    font-size: 42px;
    margin: 25px 0;

    @media (max-width: 550px) {
        font-size: 34px;
    }
`;
export const Span = styled.span<SpanInterface>`
    background-color: ${({ success, theme }) => (success ? theme.colors.rSuccess : theme.colors.rFaile)};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.tText};
    font-size: 12px;
    margin-left: 10px;
    padding: 5px;
    text-transform: uppercase;
`;
export const H4 = styled.h4<H4Interface>`
    color: ${({ theme }) => theme.colors.pText};
    cursor: ${({ cursor }) => cursor && "default"};
    font-size: 18px;
    margin: 10px 0px;
    text-align: ${({ alignRight }) => (alignRight ? "right" : "left")} @media (max-width: 550px) {
        text-align: left;
    }
`;
export const Label = styled.h4`
    color: ${({ theme }) => theme.colors.sText};
    font-size: 16px;
    letter-spacing: 4px;
    text-transform: uppercase;
`;
export const Button = styled.button`
    background-color: inherit;
    border: 2px solid ${({ theme }) => theme.colors.pText};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.pText};
    display: inline-block;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-top: 50px;
    padding: 20px 40px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s ease;

    &:hover {
        border-color: ${({ theme }) => theme.colors.sText};
        color: ${({ theme }) => theme.colors.sText};
    }

    @media (max-width: 550px) {
        text-align: center;
        width: 100%;
    }
`;
export const Hover = styled.span`
    background-color: ${({ theme }) => theme.colors.pText};
    bottom: -100%;
    border-radius: 5px;
    font-size: 14px;
    left: -150%;
    padding: 5px;
    position: absolute;
    visibility: hidden;
`;

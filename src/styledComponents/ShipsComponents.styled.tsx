import styled from "styled-components";

export const ShipsSection = styled.div`
    padding: 50px 0;

    @media (max-width: 550px) {
        padding: 50px 20px;
    }
`;

export const ShipsWrapper = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 20px;

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.sText};
    font-size: 16px;
    text-transform: uppercase;

    @media (max-width: 550px) {
        margin-bottom: 20px;
    }
`;

export const Shipcard = styled.div`
    background-color: ${({ theme }) => theme.colors.pText};
    border-radius: 10px;
`;

export const Image = styled.img`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    height: 200px;
`;

export const CardTitle = styled.h3`
    border-bottom: 1px solid #e8e8e8;
    font-size: 24px;
    margin: 10px;
    padding-bottom: 10px;
`;

export const ShipDetale = styled.div`
    padding: 10px;
`;

export const Row = styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 15px;
`;

export const RowLabel = styled.h3`
    color: ${({ theme }) => theme.colors.sText};
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    width: 35%;
`;

export const RowContent = styled.h3`
    font-size: 14px;
`;

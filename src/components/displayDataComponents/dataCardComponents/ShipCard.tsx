import React from "react";
import { Shipcard, Image, CardTitle, ShipDetale, Row, RowLabel, RowContent } from "../../../styledComponents/ShipsComponents.styled";
import { Ship } from "../../../utilitis/dataInterface";

interface DataInterface {
    data: Ship;
}

const ShipCard = ({ data }: DataInterface) => {
    return (
        <Shipcard>
            <div className="top">
                <Image src={data.image} alt="Ship image" />
                <CardTitle>{data.name}</CardTitle>
            </div>
            <ShipDetale className="bottom">
                <Row>
                    <RowLabel>home port</RowLabel>
                    <RowContent>{data.home_port}</RowContent>
                </Row>
                <Row>
                    <RowLabel>weight [kg]</RowLabel>
                    <RowContent>{data.weight_kg ? data.weight_kg : "unknown"}</RowContent>
                </Row>
            </ShipDetale>
        </Shipcard>
    );
};

export default ShipCard;

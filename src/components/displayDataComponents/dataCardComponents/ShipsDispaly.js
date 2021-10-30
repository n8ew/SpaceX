import React from "react";
import ShipCard from "./ShipCard";
import { ShipsWrapper, ShipsSection } from "../../../styledComponents/ShipsComponents.styled";
import { Label } from "../../../styledComponents/DetaleComponents";

const ShipsDispaly = ({ data }) => {
    const noShips = (
        <ShipsSection>
            <Label>There is no ships to dispaly</Label>
        </ShipsSection>
    );

    if (data.length === 0) {
        return noShips;
    }

    return (
        <ShipsSection>
            <Label>rescue ships</Label>
            <ShipsWrapper>
                {data.map((element) => (
                    <ShipCard key={element.name} data={element} />
                ))}
            </ShipsWrapper>
        </ShipsSection>
    );
};

export default ShipsDispaly;

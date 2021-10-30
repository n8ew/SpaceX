import React from "react";
import { useWindowWidth } from "../../../utilitis/useGetWindowWidth";
import { DetaleStyled, Label, H2, H4, Button, Span, Hover } from "../../../styledComponents/DetaleComponents";

const Detale = ({ data }) => {
    const width = useWindowWidth();

    return (
        <DetaleStyled>
            <div className="left">
                <div className="mission">
                    <Label>mission</Label>
                    <H2>{data.missionName}</H2>
                </div>
                <div className="rocket">
                    <Label>rocket</Label>
                    <H4>
                        {data.rocketName} {data.landSuccess ? <Span success>recoverd</Span> : <Span>unrecoverd</Span>}
                    </H4>
                </div>
                <Button as="a" href={data.pLink ? data.pLink : data.sLink} target="_blank">
                    learn more
                </Button>
            </div>
            <div className="right">
                <div className="launchDate">
                    <Label>launch date</Label>
                    <H4 alignRight>{width > 550 ? data.date : data.longDate}</H4>
                </div>
                <div className="launchSite">
                    <Label>launch site</Label>
                    <H4 className="hover" cursor="true" alignRight>
                        {data.launchSite}
                    </H4>
                    <Hover>{data.launchSiteLong}</Hover>
                </div>
            </div>
        </DetaleStyled>
    );
};

export default Detale;

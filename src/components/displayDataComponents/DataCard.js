import React from "react";
import { MainCard } from "../../styledComponents/MainCard";
import { DateTime } from "luxon";
import Detale from "./dataCardComponents/Detale";
import ShipsDispaly from "./dataCardComponents/ShipsDispaly";

const DataCard = ({ data }) => {
    const detaleData = {
        missionName: data.mission_name,
        rocketName: data.rocket.rocket_name,
        landSuccess: data.rocket.first_stage.cores[0].land_success,
        date: DateTime.fromISO(data.launch_date_local).toLocaleString(DateTime.DATE_MED),
        longDate: data.launch_date_local,
        launchSite: data.launch_site.site_id.split("_").join(" "),
        launchSiteLong: data.launch_site.site_name_long,
        pLink: data.links.article_link,
        sLink: data.links.video_link,
    };

    return (
        <MainCard>
            <Detale data={detaleData} />
            <ShipsDispaly data={data.ships} />
        </MainCard>
    );
};

export default DataCard;

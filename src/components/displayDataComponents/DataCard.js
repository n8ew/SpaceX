import React from 'react'
import { MainCard } from '../../styledComponents/MainCard'
import Detale from './dataCardComponents/Detale'
import ShipsDispaly from './dataCardComponents/ShipsDispaly'

const DataCard = ({data}) => {

    const getDate = () => {
        const date = new Date( data.launch_date_local )
        const day = date.getDate()
        let month ;
        switch(date.getMonth()) {
            case 0:
                month = "Jan"
                break
            case 1:
                month = "Feb"
                break
            case 2:
                month = "Mar"
                break
            case 3:
                month = "Apr"
                break
            case 4:
                month = "May"
                break
            case 5:
                month = "Jun"
                break
            case 6:
                month = "Jul"
                break
            case 7:
                month = "Aug"
                break
            case 8:
                month = "Sept"
                break
            case 9:
                month = "Oct"
                break
            case 10:
                month = "Nov"
                break
            case 11:
                month = "Dec"
                break
            default:
                break
        }
        
        const year = date.getFullYear()
        return `${day} ${month} ${year}`
    }

    const detaleData = {
        missionName: data.mission_name,
        rocketName: data.rocket.rocket_name,
        landSuccess: data.rocket.first_stage.cores[0].land_success,
        date: getDate(),
        launchSite: data.launch_site.site_id.split("_").join(" "),
        launchSiteLong: data.launch_site.site_name_long,
        pLink: data.links.article_link,
        sLink: data.links.video_link,
    }

    return (
        <MainCard>
            <Detale data={ detaleData } />
            <ShipsDispaly data={ data.ships }/>
        </MainCard>
    )
}

export default DataCard

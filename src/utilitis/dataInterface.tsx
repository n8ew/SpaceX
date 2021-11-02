export interface Data {
    __typename: string;
    launch_date_local: string;
    launch_site: LaunchSite;
    links: Links;
    mission_name: string;
    rocket: Rocket;
    ships: Ship[];
}

interface LaunchSite {
    __typename: string;
    site_id: string;
    site_name_long: string;
}
interface Links {
    __typename: string;
    article_link: string;
    video_link: string;
}
interface Rocket {
    __typename: string;
    rocket_name: string;
    first_stage: FirstStage;
}
interface FirstStage {
    __typename: string;
    cores: Core[];
}
interface Core {
    __typename: string;
    land_success: boolean;
}
export type Ship = {
    __typename: string;
    home_port: string;
    name: string;
    image: string;
    weight_kg: number | null;
};

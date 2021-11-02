import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            pText: string;
            sText: string;
            tText: string;
            bgTop: string;
            bgBottom: string;
            rSuccess: string;
            rFaile: string;
        };
    }
}

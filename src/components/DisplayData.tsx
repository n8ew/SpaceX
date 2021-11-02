import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "../utilitis/dataQuery";

import Loading from "./displayDataComponents/Loading";
import Error from "./displayDataComponents/Error";

import { DisplayWrapper } from "../styledComponents/DetaleComponents";
import Navbar from "./displayDataComponents/Navbar";
import DataCard from "./displayDataComponents/DataCard";

const DisplayData = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { loading, error, data } = useQuery(GET_DATA);

    if (loading) return <Loading />;
    if (error) return <Error />;

    const apiData = data.launchesPast;
    const apiDataMaxIndex = apiData.length - 1;

    const navHandeler = {
        current: currentIndex,
        maxIndex: apiDataMaxIndex,
        addToIndex: () => setCurrentIndex(currentIndex + 1),
        subtractFromCurrentIndex: () => setCurrentIndex(currentIndex - 1),
        setToStart: () => setCurrentIndex(0),
        setToEnd: () => setCurrentIndex(apiDataMaxIndex),
    };

    return (
        <DisplayWrapper>
            <Navbar handeler={navHandeler} />
            <DataCard data={apiData[currentIndex]} />
        </DisplayWrapper>
    );
};

export default DisplayData;

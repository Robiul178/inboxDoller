// import React from 'react';

import Banner from "./Banner/Banner";
import Exchange from "./Exchange/Exchange";
import FindJobs from "./FindJobs/FindJobs";
import ShareEarn from "./ShareEarn/ShareEarn";

const Home = () => {
    return (
        <div>
            <Banner />
            <FindJobs />
            <Exchange />
            <ShareEarn />
        </div>
    );
};

export default Home;
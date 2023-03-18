import S from './MainPage.module.css';
import Header from "../../components/header/Header";
import ContentsSelector from "../../components/contents-selector/ContentsSelector";
import {useEffect, useState} from "react";
import NoticeBox from "../../components/notice-box/NoticeBox";
import DUMMY from "../../common/dummy";

const MainPage = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [noticeList, setNoticeList] = useState(DUMMY);
    const [recentList, setRecentList] = useState(DUMMY);

    return (
        <div className={S["container"]}>
            <Header />
            {/*<img className={S["container-bg"]} src={"./images/ajou-bg.jpeg"} />*/}
            <div className={'flex'}>
                <ContentsSelector
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />
                <NoticeBox
                    selectedTab={selectedTab}
                    noticeList={noticeList.filter((d) => {
                        if (selectedTab === 0) return d;
                        if (selectedTab === 1) {
                            if (d.source >= 0 && d.source <= 7) return d;
                        }
                        if (selectedTab === 2) {
                            if (d.source === 7) return d;
                        }
                        if (selectedTab === 3) {
                            if (d.source === 8) return d;
                        }
                    })}
                />
            </div>
        </div>
    )
}

export default MainPage;

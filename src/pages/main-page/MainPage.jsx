import S from './MainPage.module.css';
import Header from "../../components/header/Header";
import ContentsSelector from "../../components/contents-selector/ContentsSelector";
import {useEffect, useState} from "react";
import NoticeBox from "../../components/notice-box/NoticeBox";
import DUMMY from "../../common/dummy";

const MainPage = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [noticeList, setNoticeList] = useState([]);

    useEffect(() => {
        noticeList.map(() => {

        });
    }, [selectedTab]);

    return (
        <div className={S["container"]}>
            <Header />
            <div className={'flex'}>
                <ContentsSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab}  />
                <NoticeBox selectedTab={selectedTab} noticeList={DUMMY} />
            </div>
        </div>
    )
}

export default MainPage;

import S from './MainPage.module.css';
import Header from "../../components/header/Header";
import ContentsSelector from "../../components/contents-selector/ContentsSelector";
import {useEffect, useState} from "react";
import NoticeBox from "../../components/notice-box/NoticeBox";
import DUMMY from "../../common/dummy";

const MainPage = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [noticeList, setNoticeList] = useState({items: [], meta: { total: 1 }});
    const [recentList, setRecentList] = useState( {items: [], meta: { total : 1 }});
    const [page, setPage] = useState(1);

    let isFirstPage;
    let isLastPage;

    useEffect(() => {
        setNoticeList(DUMMY);
        setRecentList(DUMMY);
    }, []);

    useEffect(() => {
        isFirstPage = page === 1;
        isLastPage = page === noticeList.meta.total;
    }, [page, selectedTab]);

    const handleSetPrevPage = () => {
        if (isFirstPage) return;
        setPage((cur) => --cur);
    };
    const handleSetNextPage = () => {
        if (isLastPage) return;
        setPage((cur) => ++cur);
    };

    return (
        <div className={S["container"]}>
            <Header />
            {/*<img className={S["container-bg"]} src={"./images/ajou-bg.jpeg"} />*/}
            <ContentsSelector
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />
            <div className={S['flex']}>
                <NoticeBox
                    selectedTab={selectedTab}
                    noticeList={noticeList.items.filter((d) => {
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
                    handleSetPrevPage={handleSetPrevPage}
                    handleSetNextPage={handleSetNextPage}
                    page={page}
                />
            </div>
        </div>
    )
}

export default MainPage;

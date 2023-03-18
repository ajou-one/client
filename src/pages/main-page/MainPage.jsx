import S from './MainPage.module.css';
import Header from "../../components/header/Header";
import ContentsSelector from "../../components/contents-selector/ContentsSelector";
import {useEffect, useState} from "react";
import NoticeBox from "../../components/notice-box/NoticeBox";
import DUMMY from "../../common/dummy";
import { QUERY_PARAM } from "./config";
import {fetchData,API_BASE_URL,ENDPOINT_RECENT,ENDPOINT_ALL} from "../../common/request";

const MainPage = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [noticeList, setNoticeList] = useState({items: [], meta: { total: 1 }});
    const [page, setPage] = useState(1);
    const [isFirstPage, setIsFirstPage] = useState();
    const [isLastPage, setIsLastPage] = useState();


    useEffect(() => {
        void (async () => {
            try {
                if (selectedTab === 0) {
                    const recentResponse = await fetchData(`${API_BASE_URL}/${ENDPOINT_RECENT}?page=${page}`);
                    setNoticeList(() => recentResponse);
                }
                else {
                    const allResponse = await fetchData(`${API_BASE_URL}/${ENDPOINT_ALL}${QUERY_PARAM[selectedTab]}&page=${page}`);
                    setNoticeList(() => allResponse);
                }
            } catch {
                // alert('요청에 실패하였습니다');
            }
        })();
        // setNoticeList(() => DUMMY);
    }, [selectedTab, page]);

    useEffect(() => {
        setIsFirstPage(() => page === 1);
        setIsLastPage(() => page === noticeList.meta.total);
    }, [noticeList, page]);

    useEffect(() => {
        setPage(1);
    }, [selectedTab]);

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
                            if (d.classifyCode >= 0 && d.classifyCode <= 6) return d;
                        }
                        if (selectedTab === 2) {
                            if (d.classifyCode >= 7 && d.classifyCode <= 8) return d;
                        }
                        if (selectedTab === 3) {
                            if (d.classifyCode === 9) return d;
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

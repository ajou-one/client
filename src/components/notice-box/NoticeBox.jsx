import S from "./NoticeBox.module.css";
import CLASSIFY_CODE from "../../common/classify-code";
import {useState} from "react";
import Pagination from "../pagination/Pagination";
import {TOGGLE_BUTTON} from "./config";

const NoticeBox = ({ selectedTab, noticeList, handleSetPrevPage, handleSetNextPage, page }) => {
    const [currentType, setCurrentType] = useState(true);
    const selectedTitle = ['최근 소식', '교내 공지', '지역구 공지', '장학 공지'];

    const onClickToggle = (event) => {
        if (event.currentTarget.name === TOGGLE_BUTTON.LIST) {
            setCurrentType(prev => true);
        } else {
            setCurrentType(prev => false);
        }
    }

    return (
        <section className={S["container"]}>
            <div className={S["menu-title-container"]}>
                <h2 className={S["menu-title"]}>{selectedTitle[selectedTab]}</h2>
                <div className={'flex items-center'}>
                    <Pagination
                        handleSetPrevPage={handleSetPrevPage}
                        handleSetNextPage={handleSetNextPage}
                        page={page}
                    />
                    <div className={'ml-4'}>
                        <button
                            name={TOGGLE_BUTTON.LIST}
                            onClick={onClickToggle}
                            className={currentType ? `${S["button-active"]} ${S["toggle-button"]} ${S["toggle-button-left"]}` : `${S["toggle-button"]} ${S["toggle-button-left"]}`}>{TOGGLE_BUTTON.LIST}</button>
                        <button
                            name={TOGGLE_BUTTON.CARD}
                            onClick={onClickToggle}
                            className={!currentType ? `${S["button-active"]} ${S["toggle-button"]} ${S["toggle-button-right"]}` : `${S["toggle-button"]} ${S["toggle-button-right"]}`}>{TOGGLE_BUTTON.CARD}</button>
                    </div>
                </div>
            </div>
            <div className={!currentType ? S["card-container"] : S["list-container"]}>
                {currentType ? noticeList.map((d, i) => {
                    return (
                        <a href={d.url} key={`notice-element-${i}`}>
                            <div className={S["element"]}>
                                <div>
                                    <img className={S["icon"]} src={CLASSIFY_CODE[d.classifyCode].icon} />
                                    <span className={S["source"]}> [{CLASSIFY_CODE[d.classifyCode].kr}] </span>
                                </div>
                                <span className={S["title"]}> {d.title}</span>
                            </div>
                        </a>
                    )
                }) : noticeList.map((d, i) => {
                    return (
                        <a href={d.url} key={`notice-element-${i}`}>
                            <div className={S["card-element"]}>
                                <div>
                                    <img src={CLASSIFY_CODE[d.classifyCode].icon} />
                                    <span className={'mr-2'}> [{CLASSIFY_CODE[d.classifyCode].kr}] </span>
                                </div>
                                <span className={S["title"]}> {d.title}</span>
                            </div>
                        </a>
                    )})
                }
            </div>
        </section>
    );
}

export default NoticeBox;

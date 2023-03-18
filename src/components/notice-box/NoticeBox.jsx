import S from "./NoticeBox.module.css";
import ClASSIFIY_CODE from "../../common/classifiy-code";
import {useState} from "react";
import Pagination from "../pagination/Pagination";

const NoticeBox = ({ selectedTab, noticeList, handleSetPrevPage, handleSetNextPage, page }) => {
    const [currentType, setCurrentType] = useState(true);
    const selectedTitle = ['최근 소식', '아주대학교', '경기도청', '한국장학재단'];

    const onClickToggle = (event) => {
        if(event.currentTarget.name === "list") {
            setCurrentType(prev =>true);
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
                        <button name={"list"} onClick={onClickToggle} className={currentType ? `${S["button-active"]} ${S["toggle-button"]} ${S["toggle-button-left"]}` : `${S["toggle-button"]} ${S["toggle-button-left"]}`}>list</button>
                        <button name={"card"} onClick={onClickToggle} className={!currentType ? `${S["button-active"]} ${S["toggle-button"]} ${S["toggle-button-right"]}` : `${S["toggle-button"]} ${S["toggle-button-right"]}`}>card</button>
                    </div>
                </div>
            </div>

            <div className={!currentType ? S["card-container"] : S["list-container"]}>
                {currentType ? noticeList.map((d, i) => {
                    return (
                        <a href={d.url} key={`notice-element-${i}`}>
                            <div className={S["element"]}>
                                <div>
                                    <img className={S["icon"]} src={ClASSIFIY_CODE[d.source].icon} />
                                    <span className={S["source"]}> [{ClASSIFIY_CODE[d.source].kr}] </span>
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
                                    <img src={ClASSIFIY_CODE[d.source].icon} />
                                    <span className={'mr-2'}> [{ClASSIFIY_CODE[d.source].kr}] </span>
                                </div>
                                <span className={S["title"]}> {d.title}</span>
                            </div>
                        </a>
                    )})
                }
            </div>
        </section>
    )
}

export default NoticeBox;

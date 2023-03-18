import S from "./NoticeBox.module.css";
import ClASSIFIY_CODE from "../../common/classifiy-code";
import {useState} from "react";

const NoticeBox = ({ selectedTab, noticeList }) => {
    return (
        <section className={S["container"]}>
            <div className={S["menu-title-container"]}>
                <h2 className={S["menu-title"]}>notice menu</h2>
                <div>
                    <button className={`${S["toggle-button"]} ${S["toggle-button-left"]}`}>list</button>
                    <button className={`${S["toggle-button"]} ${S["toggle-button-right"]}`}>card</button>
                </div>

            </div>
            {noticeList.map((d, i) => {
                return (
                    <a href={d.url} key={`notice-element-${i}`}>
                        <div className={S["element"]}>
                            <img className={S["icon"]} src={ClASSIFIY_CODE[d.source].icon} />
                            <span className={'mr-2'}> [{ClASSIFIY_CODE[d.source].kr}] </span>
                            <span> {d.title}</span>
                        </div>
                    </a>
                )
            })}
        </section>
    )
}

export default NoticeBox;

import S from "./NoticeBox.module.css";
import ClASSIFIY_CODE from "../../common/classifiy-code";
import {useState} from "react";

const NoticeBox = ({ selectedTab, noticeList }) => {
    const [currentType, setCurrentType] = useState(true);

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
                <h2 className={S["menu-title"]}>notice menu</h2>
                <div>
                    <button name={"list"} onClick={onClickToggle} className={currentType ? `${S["button-active"]} ${S["toggle-button"]} ${S["toggle-button-left"]}` : `${S["toggle-button"]} ${S["toggle-button-left"]}`}>list</button>
                    <button name={"card"} onClick={onClickToggle} className={!currentType ? `${S["button-active"]} ${S["toggle-button"]} ${S["toggle-button-right"]}` : `${S["toggle-button"]} ${S["toggle-button-right"]}`}>card</button>
                </div>
            </div>

            {currentType ? noticeList.map((d, i) => {
                return (
                    <a href={d.url} key={`notice-element-${i}`}>
                        <div className={S["element"]}>
                            <img className={S["icon"]} src={ClASSIFIY_CODE[d.source].icon} />
                            <span className={'mr-2'}> [{ClASSIFIY_CODE[d.source].kr}] </span>
                            <span> {d.title}</span>
                        </div>
                    </a>
                )
            }) : null }

        </section>
    )
}

export default NoticeBox;

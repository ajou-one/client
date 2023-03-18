import S from "./NoticeBox.module.css";
import ClASSIFIY_CODE from "../../common/classifiy-code";

const NoticeBox = ({ selectedTab, noticeList }) => {
    return (
        <section className={S["container"]}>
            <h1 className={S["container-title"]}>Notices</h1>
            {noticeList.map((d, i) => {
                return (
                    <a href={d.url} key={`notice-element-${i}`}>
                        <div className={S["element"]}>
                            <img className={S["icon"]} src={ClASSIFIY_CODE[d.source].icon} />
                            <span> [{ClASSIFIY_CODE[d.source].kr}] </span>
                            <span> {d.title}</span>
                        </div>
                    </a>
                )
            })}
        </section>
    )
}

export default NoticeBox;

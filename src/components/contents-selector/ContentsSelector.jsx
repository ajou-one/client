import S from "./ContentsSelector.module.css";

const ContentsSelector = ({ setSelectedTab }) => {
    return (
        <section className={S["container"]}>
            <div onClick={() => setSelectedTab(0)} className={S["element"]}>최근 소식</div>
            <div onClick={() => setSelectedTab(1)} className={S["element"]}>아주대학교</div>
            <div onClick={() => setSelectedTab(2)} className={S["element"]}>경기도청</div>
            <div onClick={() => setSelectedTab(3)} className={S["element"]}>한국장학재단</div>
        </section>
    );
}

export default ContentsSelector;

import S from "./ContentsSelector.module.css";

const ContentsSelector = ({ setSelectedTab, selectedTab }) => {
    return (
        <section className={S["container"]}>
            <div onClick={() => setSelectedTab(0)} className={selectedTab === 0 ? `${S["active"]} ${S["element"]}` : S["element"]}>최근 소식</div>
            <div onClick={() => setSelectedTab(1)} className={selectedTab === 1 ? `${S["active"]} ${S["element"]}` : S["element"]}>교내 공지</div>
            <div onClick={() => setSelectedTab(2)} className={selectedTab === 2 ? `${S["active"]} ${S["element"]}` : S["element"]}>지역구 공지</div>
            <div onClick={() => setSelectedTab(3)} className={selectedTab === 3 ? `${S["active"]} ${S["element"]}` : S["element"]}>장학 공지</div>
        </section>
    );
}

export default ContentsSelector;

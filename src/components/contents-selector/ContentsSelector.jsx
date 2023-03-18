import S from "./ContentsSelector.module.css";
import TAB_MENU from "./config";

const ContentsSelector = ({ setSelectedTab, selectedTab }) => {
    return (
        <section className={S["container"]}>
            <div
                onClick={() => setSelectedTab(0)}
                className={selectedTab === 0 ? `${S["active"]} ${S["element"]}` : S["element"]}>{TAB_MENU[0]}</div>
            <div
                onClick={() => setSelectedTab(1)}
                className={selectedTab === 1 ? `${S["active"]} ${S["element"]}` : S["element"]}>{TAB_MENU[1]}</div>
            <div
                onClick={() => setSelectedTab(2)}
                className={selectedTab === 2 ? `${S["active"]} ${S["element"]}` : S["element"]}>{TAB_MENU[2]}</div>
            <div
                onClick={() => setSelectedTab(3)}
                className={selectedTab === 3 ? `${S["active"]} ${S["element"]}` : S["element"]}>{TAB_MENU[3]}</div>
        </section>
    );
}

export default ContentsSelector;

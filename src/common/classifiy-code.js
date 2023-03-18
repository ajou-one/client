const ClASSIFIY_CODE = [
    {
        name: "ajou-univ",
        kr: "아주대학교",
        icon: "https://www.ajou.ac.kr/_res/ajou/kr/img/intro/img-symbol.png",
        url: "https://www.ajou.ac.kr/kr/ajou/notice.do",
    },
    {
        name: "sw-college",
        kr: "소프트웨어융합대학",
        icon: "https://cdn-icons-png.flaticon.com/128/6062/6062633.png",
        url: "https://sw.ajou.ac.kr/sw/board/notice.do",
    },
    {
        name: "sw-major",
        kr: "소프트웨어학과",
        icon: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
        url: "http://software.ajou.ac.kr/bbs/board.php?tbl=notice",
    },
    {
        name: "cs-major",
        kr: "사이버보안학과",
        icon: "https://cdn-icons-png.flaticon.com/128/6062/6062414.png",
        url: "https://security.ajou.ac.kr/security/board/board01.jsp",
    },
    {
        name: "dm-major",
        kr: "디지털미디어학과",
        icon: "https://cdn-icons-png.flaticon.com/128/6062/6062419.png",
        url: "https://media.ajou.ac.kr/media/board/board01.jsp",
    },
    {
        name: "ajou-lib",
        kr: "도서관",
        icon: "https://cdn-icons-png.flaticon.com/512/1164/1164682.png",
        url: "https://library.ajou.ac.kr/#/bbs/notice?offset=0&max=20",
    },
    {
        name: "ajou-dorm",
        kr: "생활관",
        icon: "https://cdn-icons-png.flaticon.com/512/3751/3751960.png",
        url: "https://library.ajou.ac.kr/#/bbs/notice?offset=0&max=20",
    },
    {
        name: "suwon",
        kr: "수원시청",
        icon: "data:image/jpeg;base64,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",
        url: "https://youth.gg.go.kr/gg/info/housing-welfare.do",
    },
    {
        name: "gg",
        kr: "경기도청",
        icon: "https://www.gg.go.kr/site/gg/common/img/img-header-logo_230111.png",
        url: "https://youth.gg.go.kr/gg/info/housing-welfare.do",
    },
    {
        name: "scholar",
        kr: "한국장학재단",
        icon: "https://play-lh.googleusercontent.com/NGXqDMZx81l5vbGfEWWkk1Ow2gj9KBxeDVNopc6NTgYSKYxKIfLDrpvO0Cr9uK-n7vQ",
        url: "",
    }
];

export default ClASSIFIY_CODE;

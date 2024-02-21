module.exports = {
    themeConfig: {
        nav: [{ text: '首页', link: '/' }],
        theme: 'reco',
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "基础学习",
                path: '/test/Axios通信.md',
                collapsable: false, // 不折叠
                children: [
                    { title: "Axios通信", path: "/test/Axios通信.md" },
                    { title: "Lucene", path: "/test/Lucene.md" }
                ],
            }
        ]
    }
}
advConfigs.config({
    type: "AdFlashIndexCommBanner",
    advid: "adflashfirstbanner",
    pvCode: "//vda.17173.com/show?media_code=17173&ad_code=171733105&resource_code=3105&order_code=1006775",
    width: 770,
    height: 80,
    src: "//s3.17173cdn.com/2016/70105/1/xyx1t0112/c-0112-77080-xyx1t.jpg",
    link: "//Cvda.17173.com/click?media_code=17173&ad_code=171733105&resource_code=3105&order_code=1006775"
});

advConfigs.config({
    type: "AdFlashIndexDoubleFloat",
    advid: "adflashindexdoublefloat",
    version: "v1.1.001",
    pvCode: "//vda.17173.com/show?media_code=17173&ad_code=171733121&resource_code=3121&order_code=1006777",
    link: "//Cvda.17173.com/click?media_code=17173&ad_code=171733121&resource_code=3121&order_code=1006777",
    datas: {
        contain: "//images.17173.com/2010/media/couplet.swf",
        className: "gg",
        time: 8,
        pageWidth: "1000",
        left: {
            id: "GGfloatLeft",
            width: 105,
            height: 240,
            close_width: 20,
            close_height: 240,
            top: 166,
            margin: 5,
            status: true
        },
        right: {
            id: "GGfloatRight",
            width: 105,
            height: 240,
            close_width: 20,
            close_height: 240,
            top: 166,
            margin: 5,
            status: true
        }
    }
});
window.disableAdGlobalMoneyQiYu1 = true;
noShanwanAd = true;
window.noToprightFloatAd = true;
$("body").append('<style type="text/css">#moneyQiYu{display:none}</style>');

/**
 * Created by Administrator on 2016/5/9.
 */

function urlEncoding(pageUrl) {
    while (pageUrl.indexOf(":") > -1 || pageUrl.indexOf("/") > -1 ||
    pageUrl.indexOf("?") > -1 || pageUrl.indexOf("=") > -1 ||
    pageUrl.indexOf("&") > -1) {
        pageUrl = pageUrl.replace(":", "%3a");
        pageUrl = pageUrl.replace("/", "%2f");
        pageUrl = pageUrl.replace("?", "%3f");
        pageUrl = pageUrl.replace("=", "%3d");
        pageUrl = pageUrl.replace("&", "%26");
    }
    return pageUrl;
}

////调用上传图片接口
var wx_config = {};
var cur_page_url = window.location.href;
$.ajax({
    url: "http://weixin.91zmt.com/jsapi/configjson?&appId=wxfd98bebec54b738e&webcode=91zmt&url=" + urlEncoding(cur_page_url) + "&apis=" +
    "onMenuShareAppMessage,onMenuShareTimeline" +
    "&debug=false",
    type: "GET",//jsApiList
    dataType: "json",
    async: false,
    cache: false,
    success: function (data) {
        console.log(data);
        wx_config = data;
    },
    error: function () {
    }
});
wx.config(wx_config);
//wx.config();
wx.ready(function () {
    //分享给朋友
    wx.onMenuShareAppMessage({
       title:'刘三姐故里', // 分享标题
       desc: '刘三姐故里女神月摇一摇送票活动', // 分享描述
       link: 'http://mp.weixin.qq.com/s/j6AlzorH5qcx3rZKUJhHQQ', //   分享链接
       imgUrl:'http://demo.91zmt.com/caizr/hongbao/type1/assets/i/lsjlog.jpg', // 分享图标
       type: '', // 分享类型,music、video或link，不填默认为link
       dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
       success: function () {
           // 用户确认分享后执行的回调函数
       },
       cancel: function () {
           // 用户取消分享后执行的回调函数
       }
    });
    //分享到朋友圈
    wx.onMenuShareTimeline({
        title: '刘三姐故里女神月摇一摇送票活动', // 分享标题
        link: 'http://mp.weixin.qq.com/s/j6AlzorH5qcx3rZKUJhHQQ', /*通过处理，在提交资料成功的页面拼接用户id*/      // 分享链接
        imgUrl:'http://demo.91zmt.com/caizr/hongbao/type1/assets/i/lsjlog.jpg', // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数

        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });
    // //分享到QQ
    // wx.onMenuShareQQ({
    //     title:config.shareTitle, // 分享标题
    //     desc: config.sharemiaosu, // 分享描述
    //     link: config.chareLink, //   分享链接
    //     imgUrl:config.chareImgUrl, // 分享图标
    //     success: function () {
    //         // 用户确认分享后执行的回调函数
    //     },
    //     cancel: function () {
    //         // 用户取消分享后执行的回调函数
    //     }
    // });
    // //分享到腾讯微博
    // wx.onMenuShareWeibo({
    //     title:config.shareTitle, // 分享标题
    //     desc: config.sharemiaosu, // 分享描述
    //     link: config.chareLink, //   分享链接
    //     imgUrl:config.chareImgUrl, // 分享图标
    //     success: function () {
    //         // 用户确认分享后执行的回调函数
    //     },
    //     cancel: function () {
    //         // 用户取消分享后执行的回调函数
    //     }
    // });
    // //分享到QQ空间
    // wx.onMenuShareQZone({
    //     title:config.shareTitle, // 分享标题
    //     desc: config.sharemiaosu, // 分享描述
    //     link: config.chareLink, //   分享链接
    //     imgUrl:config.chareImgUrl, // 分享图标
    //     success: function () {
    //         // 用户确认分享后执行的回调函数
    //     },
    //     cancel: function () {
    //         // 用户取消分享后执行的回调函数
    //     }
    // });

});


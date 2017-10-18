$(function(){
    /**
     * 下拉框
     * */
    $('.select-box .form-control').click(function(){
        $(this).siblings('ul').slideToggle('fast');
        return false;
    });
    $(".select-box ul li").click(function () {
        var selectVlaue=$(this).attr("value");
        var selectText=$(this).html();

        var obj=$(this).parents(".select-box");

        obj.find(".form-control").attr('title',selectText).html(selectText);
        obj.find("input").val(selectVlaue);
        obj.find("ul").hide();

        return false;
    });
})
/**
 *电话号码验证
 * @phone 手机号码
 * */
function is_mobile(phone) {
    var flag = false;
//    var reg0 = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;   //判断 固话
    var reg1 = /^((\(\d{2,3}\))|(\d{3}\-))?(13|15|18|14|17)\d{9}$/;                     //判断 手机
//    if (reg0.test(phone)) {
//        flag = true;
//    }
    if (reg1.test(phone)) {
        flag = true;
    }
    if (!flag) {
        return false;
    } else {
        return true;
    }
}

/**
 *邮箱格式验证
 * @emails 邮箱地址
 * */
function is_email(emails) {
    var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    var email = emails.match(reg);
    if (email != null) {
        return true;  //正确
    } else {
        return false; //错误
    }
}


/**
获取字符串长度*/
function getLength(str){
    return str.replace(/[^\x00-xff]/g,'xx').length;
}



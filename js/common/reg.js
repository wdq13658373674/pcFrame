/**
 * Created by wdq on 17/5/23.
 */
/*
 * 获取验证码倒计时
 * */
var wait = 60;
var t;
function times() {
    if (wait == 0) {
        $("#send").removeClass("disabled");
        $("#send").html("获取验证码");
        wait = 60;
        clearTimeout(t);
    } else {
        //$('#send').unbind("click");
        $("#send").addClass("disabled");
        $("#send").html(wait+"秒后重发");
        wait--;
        t = setTimeout(function() {
            times()
        }, 1000)
    }
}

/*表单验证*/
var tips=$('.err-tip'),
    errMsg='';
function checkMsg(){
    $('.form-box .input').each(function(index){
        var self=$(this)
            ,inx=index;

        self.blur(function(){
            self.parent().removeClass('active');
            tips.eq(inx).text('');

            if(this.value==''){
                errMsg='不能为空!';
                errTips(errMsg,inx,self);
                return false;
            }else{
                /*电话*/
                if(self.is('#phone') && !is_mobile(this.value)){
                    errMsg='电话号码输入错误!';
                    errTips(errMsg,inx,self);
                    return false;
                }

                /*电话*/
                if(self.is('#psw') && getLength(this.value)<6 || getLength(this.value)>18){
                    errMsg='电话号码输入错误!';
                    errTips(errMsg,inx,self);
                    return false;
                }

                /*姓名*/
                if(self.is('#name') && !is_name(this.name)){
                    errMsg='含有非法字符';
                    errTips(errMsg,inx,self);
                    return false;
                }
            }

            if(tips.text() == ''){
                $('#register').removeClass('disabled');
            }
        });
    })
};
/*错误信息*/
function errTips(errMsg,inx,self){
    tips.eq(inx).text(errMsg);
    self.parent().addClass('active');
}
checkMsg();


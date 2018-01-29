$(function () {
$("#submit").click(function(){
    if($("#username").val() !="" && $("#password").val() !="" ){
        $("#username").removeAttr("style");
        $("#password").removeAttr("style");
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/reg",
            dataType: "json",
            async: false,
            data: {"username":$("#username").val(),"password":$("#password").val()},
            success: function (res) {
                console.log(res);
                if(res.stats=="-1"){
                    alert("用户名重复")
                }
            },
            error: function () {
                alert("请求出错");
            }
        });
    }else{
        alert("查看下是否有没填的信息")
        if($("#username").val()==""){
            $("#username").css("border","1px solid red");
        }else{
            $("#username").css("border","1px solid #000");
        }
        if($("#password").val()==""){
            $("#password").css("border","1px solid red");
        }else{
            $("#password").css("border","1px solid #000");
        }
    }
})

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/queryInfo",
        dataType: "json",
        async: false,
        data:'',
        success: function (res) {
            console.log(res)
        },
        error: function () {
            alert("请求出错1");
        }
    });
    $("#delete").click(function () {

        $.ajax({
            type: "POST",
            url: "http://localhost:3000/destroy",
            dataType: "json",
            async: false,
            data:{"id":"3"},
            success: function (res) {
                console.log(res)
            },
            error: function () {
                alert("请求出错");
            }
        });
    })
    $("#updata").click(function () {

        $.ajax({
            type: "POST",
            url: "http://localhost:3000/updata",
            dataType: "json",
            async: false,
            data:{"id":"2","age":"100","username":"100","password":"100","salary":"100"},
            success: function (res) {
                console.log(res)
            },
            error: function () {
                alert("请求出错");
            }
        });
    })
})
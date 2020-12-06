$(function() {
    // 点击"去注册账号"
    $('#link_register').on('click', function() {
            $('.login-box').hide()
            $('.register-box').show()
        })
        // 点击"去登录"
    $('#link_login').on('click', function() {
        $('.login-box').show()
        $('.register-box').hide()
    })

    // 从layui中获取form对象
    var form = layui.form
        // 通过forify自定义校验规则
    form.verify({
        pwd: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ]
    })
})
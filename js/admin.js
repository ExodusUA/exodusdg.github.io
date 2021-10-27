$('.auth__button').click(function() {
    var userData = {
        login: $('#login').val(),
        password: $('#password').val()
    }
    $.ajax({
        url: 'http://127.0.0.1:3000/auth',
        method: 'get',
        dataType: 'json',
        async: false,
        data: userData,
        success: function(data) {
            console.log(data)

            if (data.status == 'Done!') {
                var url = "/admin.html";
                $(location).attr('href', url);
            }
        }
    });
})

if ($('body').attr('id') == 'admin') {
    $.ajax({
        url: 'http://127.0.0.1:3000/admin',
        method: 'get',
        dataType: 'json',
        async: false,
        data: 'Check IP list',
        success: function(data) {
            if (data.status == 'IP allowed!') {
                console.log('DONE!')
            }
            $('#nickname').text(data.login);
        }
    });
}

$('#logout').click(function() {
    $.ajax({
        url: 'http://127.0.0.1:3000/logout',
        method: 'get',
        dataType: 'json',
        async: false,
        data: 'logout',
        success: function(data) {
            if (data.is_auth == '0') {
                var url = "/auth.html";
                $(location).attr('href', url);
            }
        }
    });
})
$('.auth__button').click(function() {
    var userData = {
        login: $('#login').val(),
        password: $('#password').val()
    }
    $.ajax({
        url: 'https://exodusdg.github.io/auth',
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
        url: 'https://exodusdg.github.io/admin',
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
        url: 'https://exodusdg.github.io/logout',
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
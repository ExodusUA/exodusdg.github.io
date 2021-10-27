$('.auth__button').click(function() {
    var userData = {
        login: $('#login').val(),
        password: $('#password').val()
    }
    $.ajax({
        url: 'https://exo-portfolio-server.herokuapp.com/auth',
        method: 'get',
        dataType: 'json',
        async: false,
        data: userData,
        success: function(data) {
            console.log(data)

            if (data.status == 'Done!') {
                $(location).attr('href', 'https://exodusdg.github.io/admin');
            }
        }
    });
})

if ($('body').attr('id') == 'admin') {
    $.ajax({
        url: 'https://exo-portfolio-server.herokuapp.com/admin',
        method: 'get',
        dataType: 'json',
        async: false,
        data: '',
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
        url: 'https://exo-portfolio-server.herokuapp.com/logout',
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
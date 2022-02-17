$('document').ready(() => {

    new WOW().init();

    $('#portfolio-kitchens-container').slick({
        dots: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('#button-price > button').click(() => {
        $('#pop-ap').css('display', 'flex');
    });

    $('#pop-ap').click((e) => {
        if (e.target.id === 'pop-ap') {
            $('#pop-ap').hide();
        }
    });

    $('#datetimepicker').datetimepicker();
    $.datetimepicker.setLocale('ru');

    $('#datetimepicker').keypress((event) => {
       if (event.key) {
           return event.preventDefault();
       }
    });

    $('.input-name').keypress((event) => {
        let noNumber = parseInt(event.key);
        if (!isNaN(noNumber)) {
            return event.preventDefault()
        }
    });

    $('.input-phone').keypress(function (event) {
        var number = parseInt(event.key);
        if (isNaN(number)) {
            return event.preventDefault()
        }
        if ($(this).val().length === 0) {
            $(this).val('+7' + $(this).val())
        }
        if ($(this).val().length === 2) {
            $(this).val($(this).val() + ' (')
        }
        if ($(this).val().length === 7) {
            $(this).val($(this).val() + ') ')
        }
        if ($(this).val().length === 12) {
            $(this).val($(this).val() + ' - ')
        }
        if ($(this).val().length === 17) {
            $(this).val($(this).val() + ' - ')
        }
        if ($(this).val().length >= 22) {
            return event.preventDefault()
        }
    });

    $('#pop-ap-button').click((event) => {
        let name = $('#pop-ap-input-name');
        let phone = $('#pop-ap-input-phone');

        if (name.val() && phone.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val(),
                success: () => {
                    $('#pop-ap').hide();
                    alert('C вами свяжутся в ближайшее время для уточенния деталей');
                },
                error: () => {
                    $('#pop-ap').hide();
                    alert('Ошибка бронирования. Просим связаться с нами по номеру телефона')
                }
            });
        } else {
            $('#pop-ap-error').css('visibility','visible');
            return event.preventDefault();
        }
    });

    $('#measurement-button').click((event) => {
        let name = $('#measurement-input-name');
        let phone = $('#measurement-input-phone');

        if (name.val() && phone.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val(),
                success: () => {
                    alert('C вами свяжутся в ближайшее время для уточенния деталей');
                },
                error: () => {
                    alert('Ошибка бронирования. Просим связаться с нами по номеру телефона')
                }
            });
        } else {
            $('#measurement-error').css('visibility','visible');
            return event.preventDefault();
        }
    });

    $('#burger').click(() => {
        $('header').toggleClass('menu-open');
        $('#main').toggleClass('pt-95');
    });

    $('header #menu ul li a').click(() => {
        $('header').removeClass('menu-open');
        $('#main').toggleClass('pt-95');
    })
});
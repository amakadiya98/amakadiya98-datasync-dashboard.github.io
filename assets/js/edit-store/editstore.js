$(document).ready(function () {
    $('#statusSelect').select2({
        placeholder: "Durum seçin",
        closeOnSelect: false,
        width: '100%',
    });
    $('#orderConfirmation').select2({
        placeholder: "Durum seçin",
        closeOnSelect: false,
        width: '100%',
    });
    $('#selectStatus').select2({
        placeholder: "Durum seçin",
        closeOnSelect: false,
        width: '100%',
    });

    $('.toggle-eye').on('click', function () {
        var inputSelector = $(this).data('target');
        var input = $(inputSelector);
        var currentType = input.attr('type');

        if (currentType === 'password') {
            input.attr('type', 'text');
            $(this).attr('src', './../assets/images/eye-open.svg');
        } else {
            input.attr('type', 'password');
            $(this).attr('src', './../assets/images/eye-open.svg');
            $(this).attr('src', './../assets/images/eye.svg');

        }
    });

    $('.btn-up').click(function () {
        const input = $(this).closest('.number-input').find('input[type="number"]');
        let currentVal = parseInt(input.val()) || 0;
        input.val(currentVal + 1);
    });

    $('.btn-down').click(function () {
        const input = $(this).closest('.number-input').find('input[type="number"]');
        let currentVal = parseInt(input.val()) || 0;
        if (currentVal > 0) input.val(currentVal - 1);
    });

});
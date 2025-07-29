$(document).ready(function () {
    $('#browseBtn').on('click', function () {
        $('#profileInput').click();
    });

    $('#profileInput').on('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                $('#previewImage').attr('src', e.target.result).show();
            };
            reader.readAsDataURL(file);
        }
    });
});
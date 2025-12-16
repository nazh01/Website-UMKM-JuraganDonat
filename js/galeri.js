$(document).ready(function () {
    $('.btn-toggle').click(function () {

        // ambil card yang diklik saja
        let card = $(this).closest('.card');

        // toggle deskripsi di card tersebut
        card.find('.desc').slideToggle();

        // ubah teks tombol
        if ($(this).text() === 'Baca selengkapnya') {
            $(this).text('Tutup');
        } else {
            $(this).text('Baca selengkapnya');
        }
    });
});
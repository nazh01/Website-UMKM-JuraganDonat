var cart = [];

$(document).ready(function () {

    // Tambah produk ke keranjang
    $(".add").click(function () {

        var nama = $(this).data("nama");
        var harga = parseInt($(this).data("harga"));

        cart.push({
            nama: nama,
            harga: harga
        });

        $("#pesanSukses").hide();
        tampilkanKeranjang();
    });

    // Tombol pesan
    $("#btnPesan").click(function () {

        if (cart.length > 0) {
            $("#pesanSukses").slideDown(); // jQuery effect
            cart = [];
            tampilkanKeranjang();
        }

    });

});

// Menampilkan isi keranjang
function tampilkanKeranjang() {

    $("#cartList").html("");
    var total = 0;

    if (cart.length === 0) {
        $("#cartList").html(
            "<li class='list-group-item text-muted'>Keranjang masih kosong</li>"
        );
    }

    for (var i = 0; i < cart.length; i++) {

        $("#cartList").append(
            "<li class='list-group-item d-flex justify-content-between'>" +
            cart[i].nama +
            "<span>Rp " + cart[i].harga + "</span>" +
            "</li>"
        );

        total = total + cart[i].harga;
    }

    $("#totalHarga").text("Rp " + total);
}

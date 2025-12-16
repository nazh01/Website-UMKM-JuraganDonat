$(document).ready(function () {

    $("#kontakForm").on("submit", function (e) {
        e.preventDefault();

        let valid = true;

        let nama  = $("#nama").val().trim();
        let email = $("#email").val().trim();
        let nohp  = $("#nohp").val().trim();

        $(".text-danger").text("");
        $("#kategori").removeClass("is-invalid");

        if (nama === "") {
            $("#errorNama").text("Nama wajib diisi");
            valid = false;
        }

        if (email === "") {
            $("#errorEmail").text("Email wajib diisi");
            valid = false;
        } else if (!email.includes("@gmail.com")) {
            $("#errorEmail").text("Format email tidak valid");
            valid = false;
        }

        if (nohp === "") {
            $("#errorHP").text("Nomor HP wajib diisi");
            valid = false;
        } else if (!$.isNumeric(nohp)) {
            $("#errorHP").text("Nomor HP harus angka");
            valid = false;
        }

        if ($("#kategori").val() === "") {
            $("#kategori").addClass("is-invalid");
            valid = false;
        }

        if ($("input[name='jenispembayaran']:checked").length === 0) {
            $("#errorPembayaran").text("Silakan pilih metode pembayaran");
            valid = false;
        }

        if ($("#tanggal").val() === "") {
            $("#errorTanggal").text("Tanggal pemesanan wajib diisi");
            valid = false;
        }

        if (valid) {
            alert("✅ Form berhasil dikirim!");
            $("#kontakForm")[0].reset();
        }
    });

    $("#clearForm").click(function () {
        $("#kontakForm")[0].reset();
        $(".text-danger").text("");
        $("#kategori").removeClass("is-invalid");
    });

});

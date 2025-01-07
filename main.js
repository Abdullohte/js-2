let ball = +prompt("O'zingizning ballingizni kiriting:");

if (ball > 50) {
    alert("Tabriklaymiz! Ballingiz yetarli!");
    let uylanganmisiz = confirm("Uylanganmisiz?");
    if (uylanganmisiz) {
        alert("Uzur, uylanganlarni o‘qishga olmaymiz.");
    } else {
        alert("Tabriklaymiz! Siz o‘qishga kirdiz.");
    }
} else {
    alert("Afsus, sizning natijangiz 50 dan past.");
    let uylanganmi = confirm("Uylanganmisiz?");
    if (!uylanganmi) {
        alert("Tabriklaymiz! Siz o‘qishga kirdiz.Chunki siz hali uylanmagansiz");
    } else {
        alert("uzur uylanganlarni o‘qishga kirmadiz.");
    }
}

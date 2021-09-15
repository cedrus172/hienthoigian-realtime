function getContentTime() {
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    let day = currentTime.getDay();
    let date = currentTime.getDate();
    let month = currentTime.getMonth();
    let year = currentTime.getFullYear();
    let thu = "";
    switch (day) {
        case 0:
            thu = "Chủ nhật";
            break;
        case 1:
            thu = "Thứ hai";
            break;
        case 2:
            thu = "Thứ ba";
            break;
        case 3:
            thu = "Thứ tư";
            break;
        case 4:
            thu = "Thứ năm";
            break;
        case 5:
            thu = "Thứ sáu";
            break;
        case 6:
            thu = "Thứ bảy";
            break;
        default:
            thu = "Không xác định";
            break;
    }

    let content = "Bây giờ là " + hour + " giờ " + minute + " phút " + second + " giây " + ", thứ " + thu + " ngày " + date + " tháng " + month + " năm " + year;
    document.getElementById('content').innerText = content;
}
setInterval(function() {
    getContentTime();
}, 1000);
getContentTime();
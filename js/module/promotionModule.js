export default function promotionModule() {
    const productItem = document.querySelectorAll('.product-item');
    
        if(productItem) {
            productItem.forEach (item => {
                const btnAddCart = item.querySelector(".btn-add-wr");
                const controller = item.querySelector('.controller');
                const iconPlus = item.querySelector('.icon-plus');
                const iconMinus = item.querySelector('.icon-minus');
                const btnWr = item.querySelector(".btn-add-wr");
    
                btnAddCart.addEventListener('click', () => {
                    $(controller).slideToggle();
                    iconPlus.classList.toggle('active');
                    iconMinus.classList.toggle('active');
                    btnWr.classList.toggle('active');
                    
                })
    
                const loveToggle = item.querySelector(".love");
                if (loveToggle) {
                    const loveIcon = item.querySelector('.fa-heart');
                    loveIcon.addEventListener('click', () => {
                        loveIcon.classList.toggle('fas');
                    })
                }
            })
    
        }
    
    var Timer = document.querySelector('#timer')

        if(Timer) {
            // Đặt thời gian đích đến
        var deadline = new Date("May 31, 2023 00:00:00").getTime();
    
        // Cập nhật bộ đếm ngược mỗi giây
        var x = setInterval(function() {
    
        // Lấy thời gian hiện tại
        var now = new Date().getTime();
    
        // Tính toán thời gian còn lại
        var distance = deadline - now;
    
        // Tính toán các giá trị đếm ngược
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        // Hiển thị giá trị đếm ngược trong các thẻ div tương ứng
        document.getElementById("days").innerHTML = days ;
        document.getElementById("hours").innerHTML = hours ;
        document.getElementById("minutes").innerHTML = minutes ;
        document.getElementById("seconds").innerHTML = seconds ;
    
        // Kết thúc bộ đếm ngược nếu thời gian còn lại là âm
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
        }, 1000);
        }
}


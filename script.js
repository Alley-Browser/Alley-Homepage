document.addEventListener('DOMContentLoaded', function () {
    var accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.classList.toggle('active');
            var content = this.nextElementSibling;

            // Toggle the display property
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
    function changeBackgroundColor() {
        var bgColor = document.getElementById('bgColorInput').value;
        document.body.style.backgroundColor = bgColor;
    }

    document.getElementById('bgColorInput').addEventListener('input', changeBackgroundColor);
});

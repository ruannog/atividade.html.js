function changeBackgroundColor() {
    const selector = document.getElementById('bgColorSelector');
    const selectedColor = selector.value;

    if (selectedColor) {
        document.body.style.backgroundColor = selectedColor;
    } else {
        document.body.style.backgroundColor = '#f0f0f0';
    }
}

function changeTextColor() {
    const selector = document.getElementById('textColorSelector');
    const selectedColor = selector.value;

    if (selectedColor) {
        document.getElementById('text').style.color = selectedColor;
    } else {
        document.getElementById('text').style.color = 'black'; 
    }
}
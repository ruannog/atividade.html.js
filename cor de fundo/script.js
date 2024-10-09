function changeBackgroundColor() {
    const selector = document.getElementById('colorSelector');
    const selectedColor = selector.value;

    if (selectedColor) {
        document.body.style.backgroundColor = selectedColor;
    } else {
        document.body.style.backgroundColor = '#f0f0f0'; 
    }
}

let countBlocks = document.querySelectorAll(".counter");
        
for(var g = 0; g < countBlocks.length; g++) {
    countBlocks[g].onclick = function() {
        let plusBtn = this.querySelector(".plus");
        let minusBtn = this.querySelector('.minus');
        let textField = this.querySelector('input');
        let textFieldVal = +textField.value;
        plusBtn.onclick = function() {
            textField.value = textFieldVal + 1;
        }
        minusBtn.onclick = function() {
            textField.value = textFieldVal - 1;
        }
    }
}
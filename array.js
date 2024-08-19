function submitArray() {
    var input = document.getElementById('arrayInput').value;
    var array = input.split(',');
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        var number = parseInt(array[i].trim());
        if (number % 2 === 0) {
            sum += number;
        }
    }

    document.getElementById('output').innerText = 'Sum of even numbers: ' + sum;
}

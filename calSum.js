const group11Inputs = document.querySelectorAll('#yatch-table .group-1-1');
const group11SumDisplay = document.getElementById('group-1-1-sum');
const group12Inputs = document.querySelectorAll('#yatch-table .group-1-2');
const group1TotalDisplay = document.getElementById('group-1-sum');

const group21Inputs = document.querySelectorAll('#yatch-table .group-2-1');
const group21SumDisplay = document.getElementById('group-2-1-sum');
const group22Inputs = document.querySelectorAll('#yatch-table .group-2-2');
const group2TotalDisplay = document.getElementById('group-2-sum');

const group31Inputs = document.querySelectorAll('#yatch-table .group-3-1');
const group31SumDisplay = document.getElementById('group-3-1-sum');
const group32Inputs = document.querySelectorAll('#yatch-table .group-3-2');
const group3TotalDisplay = document.getElementById('group-3-sum');

const group41Inputs = document.querySelectorAll('#yatch-table .group-4-1');
const group41SumDisplay = document.getElementById('group-4-1-sum');
const group42Inputs = document.querySelectorAll('#yatch-table .group-4-2');
const group4TotalDisplay = document.getElementById('group-4-sum');



function calculateSum(inputs) {
    let sum = 0;
    inputs.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            sum += value;
        }
    });
    return sum;
}

function updateTotalSum1() {
    const group11Sum = calculateSum(group11Inputs);
    const group12Sum = calculateSum(group12Inputs);
    group11SumDisplay.textContent = group11Sum;
    if (group11Sum >= 63) {
        group1TotalDisplay.textContent = group11Sum + group12Sum + 35;
    } else {
        group1TotalDisplay.textContent = group11Sum + group12Sum;
    }
    
}

function updateTotalSum2() {
    const group21Sum = calculateSum(group21Inputs);
    const group22Sum = calculateSum(group22Inputs);
    group21SumDisplay.textContent = group21Sum;
    if (group21Sum >= 63) {
        group2TotalDisplay.textContent = group21Sum + group22Sum + 35;
    } else {
        group2TotalDisplay.textContent = group21Sum + group22Sum;
    }
    
}

function updateTotalSum3() {
    const group31Sum = calculateSum(group31Inputs);
    const group32Sum = calculateSum(group32Inputs);
    group31SumDisplay.textContent = group31Sum;
    if (group31Sum >= 63) {
        group3TotalDisplay.textContent = group31Sum + group32Sum + 35;
    } else {
        group3TotalDisplay.textContent = group31Sum + group32Sum;
    }
    
}

function updateTotalSum4() {
    const group41Sum = calculateSum(group41Inputs);
    const group42Sum = calculateSum(group42Inputs);
    group41SumDisplay.textContent = group41Sum;
    if (group41Sum >= 63) {
        group4TotalDisplay.textContent = group41Sum + group42Sum + 35;
    } else {
        group4TotalDisplay.textContent = group41Sum + group42Sum;
    }
    
}


group11Inputs.forEach(input => {
    input.addEventListener('input', updateTotalSum1);
})
group12Inputs.forEach(input => {
    input.addEventListener('input', updateTotalSum1);
})
group21Inputs.forEach(input => {
    input.addEventListener('input', updateTotalSum2);
})
group22Inputs.forEach(input => {
    input.addEventListener('input', updateTotalSum2);
})
group31Inputs.forEach(input => {
    input.addEventListener('input', updateTotalSum3);
})
group32Inputs.forEach(input => {
    input.addEventListener('input', updateTotalSum3);
})
group41Inputs.forEach(input => {
    input.addEventListener('input', updateTotalSum4);
})
group42Inputs.forEach(input => {
    input.addEventListener('input', updateTotalSum4);
})
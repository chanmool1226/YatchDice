const verifyOver631 = document.querySelector('#yatch-table .verify63-1');
const add351 = document.getElementById('add35Points-1');
const displayPointsNeeded1 = document.getElementById('points-needed-1');

const verifyOver632 = document.querySelector('#yatch-table .verify63-2');
const add352 = document.getElementById('add35Points-2');
const displayPointsNeeded2 = document.getElementById('points-needed-2');

const verifyOver633 = document.querySelector('#yatch-table .verify63-3');
const add353 = document.getElementById('add35Points-3');
const displayPointsNeeded3 = document.getElementById('points-needed-3');

const verifyOver634 = document.querySelector('#yatch-table .verify63-4');
const add354 = document.getElementById('add35Points-4');
const displayPointsNeeded4 = document.getElementById('points-needed-4');


function updatePoints1() {
    const value =  parseFloat(verifyOver631.textContent);

    if (!isNaN(value) && value>=63) {
        add351.textContent = '35';
    } else {
        add351.textContent = '0';
    }

    if (!isNaN(value) && value<63) {
        const num = 63 - value;
        const str = num.toString();
        displayPointsNeeded1.textContent = str;
    } else {
        displayPointsNeeded1.textContent = '0';
    }
}


const observer1 = new MutationObserver(updatePoints1);
const config = { childList: true, subtree: true, characterData: true };
observer1.observe(verifyOver631, config)


function updatePoints2() {
    const value =  parseFloat(verifyOver632.textContent);

    if (!isNaN(value) && value>=63) {
        add352.textContent = '35';
    } else {
        add352.textContent = '0';
    }

    if (!isNaN(value) && value<63) {
        const num = 63 - value;
        const str = num.toString();
        displayPointsNeeded2.textContent = str;
    } else {
        displayPointsNeeded2.textContent = '0';
    }
}


const observer2 = new MutationObserver(updatePoints2);
const config2 = { childList: true, subtree: true, characterData: true };
observer2.observe(verifyOver632, config2)


function updatePoints3() {
    const value =  parseFloat(verifyOver633.textContent);

    if (!isNaN(value) && value>=63) {
        add353.textContent = '35';
    } else {
        add353.textContent = '0';
    }

    if (!isNaN(value) && value<63) {
        const num = 63 - value;
        const str = num.toString();
        displayPointsNeeded3.textContent = str;
    } else {
        displayPointsNeeded3.textContent = '0';
    }
}


const observer3 = new MutationObserver(updatePoints3);
const config3 = { childList: true, subtree: true, characterData: true };
observer3.observe(verifyOver633, config3)



function updatePoints4() {
    const value =  parseFloat(verifyOver634.textContent);

    if (!isNaN(value) && value>=63) {
        add354.textContent = '35';
    } else {
        add354.textContent = '0';
    }

    if (!isNaN(value) && value<63) {
        const num = 63 - value;
        const str = num.toString();
        displayPointsNeeded4.textContent = str;
    } else {
        displayPointsNeeded4.textContent = '0';
    }
}


const observer4 = new MutationObserver(updatePoints4);
const config4 = { childList: true, subtree: true, characterData: true };
observer4.observe(verifyOver634, config4)
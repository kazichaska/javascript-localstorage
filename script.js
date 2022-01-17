const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const lsOutput = document.querySelector(".lsOutput");

btnInsert.onclick = function() {
    const key = inpKey.value;
    const value = inpValue.value;

    console.log(key);
    console.log(value);

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    // console.log(key);
    // console.log(value);
    if (value > 30) {
        console.log(value)
        lsOutput.innerHTML += `${key}: ${value}<br/>`;
    }

    // lsOutput.innerHTML += `${key}: ${value}<br/>`;
    // const belowThirty = ((localStorage.getItem(key) < 30));
    // (lsOutput.innerHTML += (belowThirty));

}

// localStorage.getItem

// for (const key in localStorage) {
//     if (localStorage.hasOwnProperty(key)) {
//         console.log(`${key}: ${localStorage.getItem(key)}`);
//     }
// }

// for (i = 0; i < localStorage.length; i++) {
//     console.log(localStorage.getItem[i]);
// }



// Local Storage
// Miley: 29
// John: 40
// Chris: 32
// Bill: 50
// grant: 13
// Kristy: 30
// nicholas: 12
// Mykah: 12
// Ronda: 52


// LOCAL STORAGE DATA
// Local Storage
// John: 40
// Chris: 32
// Bill: 50
// Ronda: 52
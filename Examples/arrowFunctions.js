function firstFunction(...value) {
    const newArrayClassic = [1, 2, 3, 4, 5];
    const newArray = [...newArrayClassic, 1, 2, 3, 4, 5];
    const combinedArray = newArray.map(item => item * 2);

    const mappedArray = newArray.map((item, index) => {return item * index});

    console.log("Testing this function" + value );
    console.log(combinedArray);
    console.log(value.sort());
    console.log(mappedArray);
}

const secondFunction = (value) => {
    console.log(`Testing this function ${value}`);
}

const thirdFunction = value => console.log(`Testing this third function ${value}`);

firstFunction("Hello 1", "Hello 2");
secondFunction("Hello 2");
thirdFunction("Hello 3");


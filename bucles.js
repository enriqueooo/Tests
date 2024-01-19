function add(x, y) {
    return x + y;
}

function runTests() {
    let tests = [
        { a: 4, b: 4, expected: 8 },
        { a: 3, b: 5, expected: 8 },
        { a: 2, b: 6, expected: 8},
    
    ];

    tests.forEach((test, index) => {
        let sumaResult = add(test.a, test.b);
        let testResult = sumaResult === test.expected ? 'Test passed 🙂!' : 'Test failed. Keep coding 😫!';
        alert(`Test ${index + 1}: ${testResult}`);
    });
}

export{runTests};
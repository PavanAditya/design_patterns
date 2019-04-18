let myModule = function() {

    let privateMethod = function() {
        console.log("I'm Private");
    }

    publicMethod = function() {
        console.log("I'm Public");
    };
    publicMethod();
    privateMethod();
}();

// myModule.publicMethod();
// myModule.privateMethod();
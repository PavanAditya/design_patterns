let Singleton = function () {
    let instance; // ? initialization

    function createInstance () {
        let object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) { // ! same instance will be created if the if-cond is present
            instance = createInstance();
            }
            return instance;
        }
    };
}();

function run () {

    let instance1 = Singleton.getInstance();
    let instance2 = Singleton.getInstance();
    console.log(instance1);
    console.log((instance1 === instance2) ?
        "Same instance is again called, so the value of the second is not changed. Singleton can be instantiated only once "
        : " New Instance is created");
    console.log(instance2);
}

run();
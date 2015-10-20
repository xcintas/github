
function Service() {
    var service = {
        sum: sum,
        minus: minus
    };
    return service;

    function sum(a, b){
        if(a < 5)
            return a+b;

        if(a >= 5)
            return a*2+b;
    }

    function minus(a, b){
        return a - b;
    }
}
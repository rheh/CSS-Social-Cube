$(function () {
    
    var lastClass = null,
        stepCount = 1;

    switchSpin();

    function switchSpin() {
        
        var secsClass = "sec" + stepCount;

        if (lastClass !== null && 
            $('.cube').hasClass(lastClass)) {
            $('.cube').removeClass(lastClass);
        }

        $('.cube').addClass(secsClass);

        lastClass = secsClass;

        if (++stepCount > 2) {
            stepCount = 1;
        }

        setTimeout(function () {
            switchSpin();
        }, 5000);

    }

});
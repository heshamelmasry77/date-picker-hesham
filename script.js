(function () {

    var controllers = document.getElementsByClassName('controllers-container');
    for (var i = 0; i < controllers.length; i++) {
        controllers[i].addEventListener('click', function () {
            alert(this.id);
        });
    }
    var nowTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    alert(nowTime)
})();



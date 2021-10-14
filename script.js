    var box = $('#boxToHide');

    $('body').on('click', function() {
        box.css('display', 'none');
    });
    $('#toggleButton').on('click', function(ev) {
        var boxDisplay = box.css('display');
        var flexOrNoneClass = (boxDisplay === 'none') ? 'flex' : 'none';

        box.css('display', flexOrNoneClass);
        ev.stopPropagation(); //this is important! If removed, you'll get both alerts
    });
    
    //If you want to use js, use like this:
    /*
    var body = document.getElementById('wrapper');
    var except = document.getElementById('except');

    body.addEventListener("click", function () {
        alert("wrapper");
    }, false);
    except.addEventListener("click", function (ev) {
        alert("except");
        ev.stopPropagation(); //this is important! If removed, you'll get both alerts
    }, false);
    */
    // This was found here: https://www.py4u.net/discuss/1001268
    // But I also wanted to write it a another way and share it :)

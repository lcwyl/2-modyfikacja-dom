$(function () {
    let btn = $("<button>button</button>");
    $("body").append(btn)

    for (let i = 1; i <= 5; i++) {

        $("body").append($("<p> To jest paragraf " + i + "</p>"))
        //stwóz 5 razy paragraf
    }
    $(btn).click(function () {
        let lastElement = $("p").last();
        console.log(lastElement);
        $("p").first().before(lastElement)

    })

    let btn2 = $("<button>button2</button>")
    $("body").append(btn2)

    $(btn2).click(function () {

        let firstElement = $("p").first();
        console.log(firstElement)
        $("p").last().after(firstElement)

    })


});
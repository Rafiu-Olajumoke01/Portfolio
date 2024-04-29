$(document).ready(function () {
    $(".main-content h4 p")

    new Typed("#animate", {
        strings: ["i am a frontend dev", "reach out to me on", "+23408083790474"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    })
    
    $(".fa-caret-down").click(function(){
        $(".small a").css("display", "block");
        $(".small a").css("margin", "1rem 0")
        $(".small").toggle(3000)
        $(".small a").css("background-color", "crimson")
        $(".small a").css("border-radius", "3rem")
        $(".small a").css("")
        // $("#testing").removeClass("logo")
        // $(".logo").remove()
        // $(".big a").addClass("logo")
    
    })

    AOS.init()


})


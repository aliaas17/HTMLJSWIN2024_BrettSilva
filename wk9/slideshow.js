window.onload = function () {
    document.querySelector('h1').innerHTML = 'South Park Slideshow'
    var image = 0
    var images = [
        "south_park.jpg",
        "South_Park.png",
        "south-park-background-qqdn3mmdnlio05ts.jpg",
        "kids.jpg"
    ]
    var siteBtn = document.querySelector('#slideShowButton')
    function changeImage() {
        siteBtn.removeEventListener('click', changeImage)
        if (image >= images.length) {
            image = 0
        }
        document.querySelector("#site-image").src = `images/${images[image]}`
        setTimeout(changeImage, 2000)
        image++
        console.log(image,"yo",images)
    }
    siteBtn.addEventListener('click', changeImage)
}
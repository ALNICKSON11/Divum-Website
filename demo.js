const gallery = {1:"/image/Social Networks .jpg", 2:"/image/Supply Chain 002.jpg", 3:"/image/Media 003.jpg", 4:"/image/Fintech 004.jpg", 5:"/image/Health Tech.jpg", 6:"/image/E-commerce.jpg", 7:"/image/Travel Tech.jpg", 8:"/image/Edutech.jpg"}

function showImage(list) {
    document.getElementById("client-img").src = gallery[list.value]
}
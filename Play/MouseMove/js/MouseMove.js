// test = document.getElementsByClassName(test)[0]

function dealDrag() {
    var img = event.currentTarget;
    var x = img.style.left
    var y = img.style.top
    console.log(x,y)
    var xoff = event.clientX - x
    var yoff = event.clientY - y
    document.addEventListener('mousemove', doMove, true)
    document.addEventListener('mouseup', doUp, true)
    event.stopPropagation()
    event.preventDefault()

    function doMove() {
        img.style.left = (event.clientX - xoff) + 'px'
        img.style.top = (event.clientY - yoff) + 'px'
        event.stopPropagation()
        event.preventDefault()
       
    }
    function doUp() {
        document.removeEventListener('mousemove', doMove, true)
        document.removeEventListener('mouseup', doUp, true)
        event.stopPropagation()
        event.preventDefault()
    }
}
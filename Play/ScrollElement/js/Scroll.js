left1 = document.getElementsByClassName('left')[0]
left2 = document.getElementsByClassName('left')[1]
right1 = document.getElementsByClassName('right')[0]
right2 = document.getElementsByClassName('right')[1]
box1 = document.getElementsByClassName('box1')[0]
box2 = document.getElementsByClassName('box2')[0]




// document.addEventListener('scroll',() => {
//     let scrolled = (window.scrollY-box1.offsetTop)/(box1.scrollHeight-window.innerHeight)
//     console.log(scrolled)
//     if (scrolled>=1) scrolled = 1
//     if (scrolled<=0) scrolled = 0

//     left1.style.setProperty('--per',`${scrolled * 100}%`)
//     right1.style.setProperty('--per',`${scrolled * 100}%`)
// })


// document.addEventListener('scroll',() => {
//     let scrolled = (window.scrollY-box2.offsetTop)/(box2.scrollHeight-window.innerHeight)

//     console.log(scrolled)
//     if (scrolled>=1) scrolled = 1
//     if (scrolled<=0) scrolled = 0


//     left2.style.setProperty('--per',`${scrolled * 100}%`)
//     right2.style.setProperty('--per',`${scrolled * 100}%`)
// })

function scrollEffect(element, leftElement, rightElement) {
    document.addEventListener('scroll', () => {
        let scrolled = Math.abs(window.scrollY-element.offsetTop) / (element.scrollHeight - window.innerHeight)

        if (scrolled >= 1) scrolled = 1;
        if (scrolled <= 0) scrolled = 0
        console.log(scrolled)

        leftElement.style.setProperty('--per', `${scrolled * 100}%`)
        rightElement.style.setProperty('--per', `${scrolled * 100}%`)
    })
}
scrollEffect(box1, left1, right1)
scrollEffect(box2, left2, right2)
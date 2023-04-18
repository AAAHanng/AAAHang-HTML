const h1 = document.querySelector('h1')
document.addEventListener('scroll',()=>{
    let scrolled=document.documentElement.scrollTop/(document.documentElement.scrollHeight-
        document.documentElement.clientHeight)

    console.log(scrolled)
    h1.style.setProperty('--percentage',`${scrolled * 100}%`)
})
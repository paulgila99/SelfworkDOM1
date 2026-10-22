let paragrafi = document.querySelectorAll('p')
let btnColor = document.querySelectorAll('#btnColor')
let btnBold = document.querySelectorAll('#btnBold')
let btnHide = document.querySelectorAll('#btnHide')

btnColor.forEach(btn => {
    btn.addEventListener('click', () => {
        paragrafi.forEach(paragrafi => {
            let r = Math.floor(Math.random() * 256)
            let g = Math.floor(Math.random() * 256)
            let b = Math.floor(Math.random() * 256)

        paragrafi.style.color = `rgb(${r}, ${g}, ${b})`
    });
    })
})

btnBold.forEach(btn => {
    btn.addEventListener('click', () => {
        paragrafi.forEach(paragrafi => {
            paragrafi.style.fontWeight = paragrafi.style.fontWeight === 'bold' ? 'normal' : 'bold'
        });
    });
});

btnHide.forEach(btn => {
    btn.addEventListener('click', () => {
        paragrafi.forEach(paragrafi => {
            paragrafi.style.display = paragrafi.style.display === 'none' ? 'block' : 'none'
        });
    });
});
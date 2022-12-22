const data = [
    {
        name: 'burgers',
        img: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg'
    },
    {
        name: 'pizzas',
        img: 'https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg'
    },
    {
        name: 'drinks',
        img: 'https://c4.wallpaperflare.com/wallpaper/97/512/27/a-glass-of-beer-wallpaper-preview.jpg'
    },
    {
        name: 'COCKTAILS',
        img: 'https://www.tastingtable.com/img/gallery/11-cocktails-to-try-if-you-like-drinking-gin/l-intro-1659025591.jpg'
    }
]

const swiperRender = (api) => {
    const myWrapper = document.querySelector('.myWrapper')
    api.forEach(el => {
        const slide = document.createElement('div')

        slide.className = 'swiper-slide'

        slide.style.backgroundImage = `url('${el.img}')`

        myWrapper.append(slide)
    })

}
swiperRender(data)






const swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
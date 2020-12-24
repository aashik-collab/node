export const settings = {
    dots: true,
    infinite: false,
    autoplay: true,
    lazyload: 'ondemand',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
            },
        },
    ],
};

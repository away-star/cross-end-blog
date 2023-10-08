export const getRandSlide = (slideShow: string): string => {
    return slideShow.split(';')[Math.floor(Math.random() * slideShow.split(';').length)];
}


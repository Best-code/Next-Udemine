const smoothScroll = (id) => {
    var y = document.getElementById(id).getBoundingClientRect().top;
    window.scrollTo({top: y, behavior: 'smooth' })
}

export default smoothScroll;
function reveal() {
    const reveals = document.querySelectorAll('.show')

    for (let count = 0; count < reveals.length; count++) {
      const windowHeight = window.innerHeight
      const elementTop = reveals[count].getBoundingClientRect().top
      const elementVisible = 80

      if (elementTop < windowHeight - elementVisible) {
        reveals[count].classList.add('active')
      }
    }
}

export default reveal
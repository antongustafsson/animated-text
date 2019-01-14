const textElement = document.querySelector('.animated-text')

const runAnimation = () => new Promise(resolve => {
    const targetValue = 5017658077246508706697n
    const setValue = value => textElement.innerHTML = value.toString(36)
    let value = 0n

    const update = () => {
        const diff = targetValue - value
        value += ((diff * 5n) / 20n) + 1n
        setValue(value)
        if (value !== targetValue)
            requestAnimationFrame(update)
        else resolve()
    }
    update()
})

runAnimation().then(() => {
    textElement.classList.remove('animated-text-focused')
    setTimeout(() => textElement.classList.add('animated-text-hidden'), 1000)
})
export const getRandoNumber = (number) => {
    const random = Math.random()
    const roundedRandom = Math.round(random * number)

    return roundedRandom
}
function solution(s, n) {
    const answer = [...s].map((str) => {
        
        const unit = str.charCodeAt()

        if (65 <= unit && unit <= 90) {
            return String.fromCharCode((unit + n - 65) % 26 + 65)
        }

        if (97 <= unit && unit <= 122) {
            return String.fromCharCode((unit + n - 97) % 26 + 97)
        }
        return ' '
    }).join('')

    return answer
}
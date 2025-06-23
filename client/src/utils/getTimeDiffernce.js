

export const getTimeDiff  = (salePeriod)=>{
    const now  = new Date().getTime()
    const time = new Date(salePeriod).getTime()
    const timeDiff =  time - now
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)
    if (days < 0 || hours < 0 || minutes < 0 || seconds < 0) return {days : 0 , hours : 0 , minutes : 0 , seconds : 0}
    if (days <10) days = "0" + days
    if (hours <10) hours = "0" + hours
    if (minutes <10) minutes = "0" + minutes
    if (seconds <10) seconds = "0" + seconds
    return {days , hours , minutes , seconds}   
}
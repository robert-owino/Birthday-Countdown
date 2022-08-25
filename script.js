
const ElDay = document.getElementById('days')
const ElHours = document.getElementById('hours')
const ElMinutes = document.getElementById('minutes')
const ElSeconds = document.getElementById('seconds')

const birthDate = '3 Jan 2023'

function countDown(){
    const birthDayDate = new Date(birthDate)
    const currentDate = new Date()

    const totalSeconds = (birthDayDate - currentDate) / 1000
    const day = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds/3600) % 24
    const minutes = Math.floor(totalSeconds/60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    ElDay.innerHTML = day
    ElHours.innerHTML = formatTime(hours)
    ElMinutes.innerHTML = formatTime(minutes)
    ElSeconds.innerHTML = formatTime(seconds)
}
function formatTime(time){
    return time < 10 ? `0${time}` : time
}
countDown()
setInterval(countDown, 1000)
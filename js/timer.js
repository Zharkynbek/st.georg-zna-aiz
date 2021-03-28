// Dark Modus

const bodyRef = document.body
const inputRef = document.querySelector('#theme-switch-toggle')

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

bodyRef.classList.add(localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'))
inputRef.checked = localStorage.getItem('theme') === Theme.DARK


function changeTheme() {
    if (inputRef.checked) {
        bodyRef.classList.add(Theme.DARK)
        bodyRef.classList.remove(Theme.LIGHT)
        localStorage.setItem('theme', Theme.DARK)
    } else {
        bodyRef.classList.remove(Theme.DARK)
        bodyRef.classList.add(Theme.LIGHT)
        localStorage.setItem('theme', Theme.LIGHT)
    }
}

inputRef.addEventListener('click', changeTheme)

class CountdownTimer  {
  constructor({selector, targetDate}) {
    this.selector = selector
    this.targetDate = new Date(targetDate)
    this.timer = this.timer.bind(this)
  }

  timer() {
    const daysRef = document.querySelector('span[data-value="days"]')
    const hoursRef = document.querySelector('span[data-value="hours"]')
    const minsRef = document.querySelector('span[data-value="mins"]')
    const secsRef = document.querySelector('span[data-value="secs"]')

    const currentDate = Date.now()
    const rest = this.targetDate - currentDate

    const days = Math.floor(rest / (1000 * 60 * 60 * 24));
    const hours = Math.floor((rest % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((rest % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((rest % (1000 * 60)) / 1000);
    
    daysRef.textContent = days > 9 ? days : `0${days}`
    hoursRef.textContent = hours > 9 ? hours : `0${hours}`
    minsRef.textContent = mins > 9 ? mins : `0${mins}`
    secsRef.textContent = secs > 9 ? secs : `0${secs}`
  }

  start() {
    setInterval(this.timer, 1000)
  }
}

const time = new CountdownTimer({
  selector: '#timer-1',
  targetDate: 'May 1, 2021',
});

time.start()
const timerRef = document.querySelector('#timer-1')
const targetDate = new Date('Aug 31, 2021')


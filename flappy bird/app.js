document.addEventListener('DOMContentLoaded' , () =>{
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    let birdLeft = 100
    let birdBottom = 220
    let gravity = 2

    function StartGame() {
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }
    let timerId = setInterval(StartGame, 20)



    function jump(){
        if (birdBottom < 500)birdBottom += 50
        bird.style.bottom = birdBottom + 'px'
        console.log(birdBottom)
    }
    addEventListener('keyup', jump)

    function generateObstacle() {
        let obstacleLeft = 500
        let randomHeight = math.random() * 60
        let obstacleBottom = randomHeight

        const obstacle = document.createElement('div')
        obstacle.classList.add('obstacle')
        gameDisplay.appendChild(obstacle)
        obstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'

        function moveObstacle(){
            obstacleLeft -=2
            obstacle.style.left = obstacleLeft + 'px'   
        }
        let timerId = setInterval(moveObstacle, 20)
    }
    generateObstacle ()
})
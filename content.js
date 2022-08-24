var selection = Math.floor(Math.random() * 4) + 1

if (selection == 1) {
    tag = '<video controls autoplay loop class="centered" title="quelle: https://www.reddit.com/r/600euro/comments/wvhjsu/was_attila_nicht_erw%C3%A4hnt_breuer_impft_pers%C3%B6nlich/" src="./src/1.mp4"></video>'
}
else if (selection == 2) {
    tag = '<video controls autoplay loop class="centered" title="quelle: https://www.youtube.com/watch?v=N4Qy8MqA4qw" src="./src/2.mp4"></video>'
}
else if (selection == 3) {
    tag = '<img class="centered" title="quelle: https://kritisch-denken.ch/wp-content/uploads/2020/12/ken_jebsen_joker.jpg" src="./src/3.jpg"></img>'
}
else if (selection == 4) {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_self');
}
else if (selection == 5) {
    tag = ''
}
else if (selection == 6) {
    tag = ''
}
else if (selection == 7) {
    tag = ''
}
else if (selection == 8) {
    tag = ''
}
else if (selection == 9) {
    tag = ''
}

document.write(tag)
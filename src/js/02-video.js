import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const keyVideoPlayer = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on('timeupdate', throttle(onPlayerTimeUpdate, 1000));

player.setCurrentTime(localStorage.getItem(keyVideoPlayer) || 0);

function onPlayerTimeUpdate({ seconds }) {
  localStorage.setItem(keyVideoPlayer, seconds);
}

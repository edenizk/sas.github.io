function GetDuration(ms){
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0) - 1;
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

export default GetDuration
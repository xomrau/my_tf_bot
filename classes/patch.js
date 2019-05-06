```var Patch = function(){
    const rp = require('request-promise');
    const url = 'https://oce.leagueoflegends.com/en/news/game-updates/patch/patch-822-notes';

    rp(url)
        .then(function(html){
        //success!
        console.log(html);
        })
        .catch(function(err){
        
    });
}```



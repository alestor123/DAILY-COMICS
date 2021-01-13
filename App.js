var axios = require('axios'),
fs = require('fs');
module.exports = async () => {
var data = await axios.get('https://xkcd.com/info.0.json'),
image = await axios.get(data.data.img, {responseType: 'arraybuffer'})
fs.writeFileSync('./comic.png', image.data, (err) => {if(err) throw err})
}
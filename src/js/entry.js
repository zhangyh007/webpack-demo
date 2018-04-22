import './../css/test.css'
import Data from './../json/data.json'
import { math, mul } from './../js/test'

let data = JSON.stringify(Data)
document.write(data + '<br />', math(2) + '<br />',mul(3) + '<br />', 'webpack is working')
// document.write('webpack is working')
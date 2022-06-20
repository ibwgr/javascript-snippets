// 'use strict'  // optional, weil im Browser via <script type="module" ...> geladen

// import named export
import {Logger} from './logger.module.mjs'
import {PI} from './logger.module.mjs'
// rename import
import {PI as pii} from './logger.module.mjs'

let l = new Logger(console.log)
l.warn('hi')
l.log('du')
l.log([pii, PI, Logger.PI])
console.log(document.getElementsByTagName('p'))

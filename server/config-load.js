import yaml from 'js-yaml'
import fs from 'fs'

try {
  configFile = fs.readFileSync('custom.config.yml', 'utf8')
  global.config = yaml.load(configFile)
} catch (e) {
  console.log('ApiKey不存在')
  global.config = { ApiKey: null }
}
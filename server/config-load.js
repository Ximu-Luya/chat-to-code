import yaml from 'js-yaml'
import fs from 'fs'

try {
  const configFile = fs.readFileSync('custom.config.yml', 'utf8')
  global.config = yaml.load(configFile)
} catch (e) {
  console.log(e);
  throw "ApiKey不存在"
}
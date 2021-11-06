import config from './index'

const DEFAULT_NAMESPACE = config.defaults.namespace

const info = (message: any, namespace: string = DEFAULT_NAMESPACE) => {
  if(typeof message === 'string') {
    console.log(`[${getDate()}] [${namespace}] [INFO] ${message}`)
  } else {
    console.log(`[${getDate()}] [${namespace}] [INFO]`, message)
  }
}

const warn = (message: any, namespace: string = DEFAULT_NAMESPACE) => {
  if(typeof message === 'string') {
    console.log(`[${getDate()}] [${namespace}] [WARN] ${message}`)
  } else {
    console.log(`[${getDate()}] [${namespace}] [WARN]`, message)
  }
}

const error = (message: any, namespace: string = DEFAULT_NAMESPACE) => {
  if(typeof message === 'string') {
    console.log(`[${getDate()}] [${namespace}] [ERROR] ${message}`)
  } else {
    console.log(`[${getDate()}] [${namespace}] [ERROR]`, message)
  }
}

const getDate = () => {
  return new Date()
}

const logging = {
  info,
  warn,
  error
}

export default logging
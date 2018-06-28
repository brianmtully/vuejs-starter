import {HTTP} from '../http-common'
class RouteService {
  static getAllTests () {
    return new Promise(async (resolve, reject) => {
      try {
        const serverResponse = await HTTP.get('api/test')
        const unparsedData = serverResponse.data
        resolve(unparsedData)
      } catch (error) {
        reject(error)
      }
    })
  }

  static getSingleTest (id) {
    return new Promise(async (resolve, reject) => {
      try {
        const serverResponse = await HTTP.get('api/test/' + id)
        const unparsedData = serverResponse.data.data
        resolve(unparsedData)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default TestService

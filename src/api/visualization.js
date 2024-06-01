import request from '../utils/requests.js'

export const getVisualization =() => {
    return request({
        url:'/visualization.json'
    })
}
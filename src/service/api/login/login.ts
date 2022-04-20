import http from '@/service/http'
import { IloginApi } from './types'

const loginApi: IloginApi = {
    login(params) {
        return http.post('/login', params)
    }
}

export default loginApi
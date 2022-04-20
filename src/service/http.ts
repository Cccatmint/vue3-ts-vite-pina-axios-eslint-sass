// http.ts

import axios, { AxiosRequestConfig } from 'axios'
import NProgress from 'nprogress'

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.interceptors.request.use(
    (config: AxiosRequestConfig<any>) => {
        const token = window.sessionStorage.getItem('token')
        if (token) {
            // @ts-ignore
            config.headers.token = token
        }
        return config
    },
    (error) => {
        return error
    }
)

axios.interceptors.response.use((res) => {
    if(res.data.code === 111) {
        // token 失效就清空 code 自定义
        sessionStorage.setItem('token', '')
    }
    return res
})

// interface
interface ResType<T> {
    code: number,
    data?: T,
    msg: string,
    err?: string
}

interface Http {
    get<T>(url: string, params?: unknown): Promise<ResType<T>>
    post<T>(url: string, params?: unknown): Promise<ResType<T>>
    delete<T>(url: string, params?: unknown): Promise<ResType<T>>
    put<T>(url: string, params?: unknown): Promise<ResType<T>>
    upload<T>(url: string, params?: unknown): Promise<ResType<T>>
    download<T>(url: string): void
}

const http: Http = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            NProgress.start()
            axios
                .get(url, { params })
                .then(res => {
                    NProgress.done()
                    resolve(res.data)
                })
                .catch(err => {
                    NProgress.done()
                    reject(err)
                })
        })
    },

    post(url, params) {
        return new Promise((resolve, reject) => {
            NProgress.start()
            axios
                .post(url, { params })
                .then(res => {
                    NProgress.done()
                    resolve(res.data)
                })
                .catch(err => {
                    NProgress.done()
                    reject(err)
                })
        })
    },

    delete(url, params) {
        return new Promise((resolve, reject) => {
            NProgress.start()
            axios
                .delete(url, { params })
                .then(res => {
                    NProgress.done()
                    resolve(res.data)
                })
                .catch(err => {
                    NProgress.done()
                    reject(err)
                })
        })
    },

    put(url, params) {
        return new Promise((resolve, reject) => {
            NProgress.start()
            axios
                .put(url, { params })
                .then(res => {
                    NProgress.done()
                    resolve(res.data)
                })
                .catch(err => {
                    NProgress.done()
                    reject(err)
                })
        })
    },

    upload(url, file) {
        return new Promise((resolve, reject) => {
            NProgress.start()
            axios
                .post(url, file, { headers: { 'Content-Type': 'multipart/form-data' } })
                .then(res => {
                    NProgress.done()
                    resolve(res.data)
                })
                .catch(err => {
                    NProgress.done()
                    reject(err)
                })
        }) 
    },

    download(url) {
        const iframe = document.createElement('iframe')
        iframe.style.display = "none"
        iframe.src = url
        iframe.onload = () => {
            document.body.removeChild(iframe)
        }
        document.body.appendChild(iframe)
    }
}

export default http
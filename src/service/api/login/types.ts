export interface IloginParams {
    username: string,
    password: string
}

export interface IloginApi {
    login: (params: IloginParams) => Promise<any>
}

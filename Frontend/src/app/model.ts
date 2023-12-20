export interface LoginResponse {
    jwt: string,
    permission: {
        can_create_users: boolean,
        can_read_users: boolean,
        can_update_users: boolean,
        can_delete_users: boolean
    }
}

export interface LoginRequest {
    email: string,
    password: string
}
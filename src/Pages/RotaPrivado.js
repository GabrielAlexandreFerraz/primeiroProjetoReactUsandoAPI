import { Outlet, Navigate } from 'react-router-dom'

export default function RotaPrivado(){

    // usar o use contexte para pegar o valor para alterar o valor de false para true
const login = true


    return login === true ? <Outlet /> : <Navigate to="/" replace />
}
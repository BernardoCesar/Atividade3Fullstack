import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login  from "./telas/Login";
import Home from './telas/Home'
import Usuario  from "./telas/Usuario";
import PontosUsuario  from "./telas/Pontos";
import PremiosUsuario  from "./telas/PremiosUsuario";
import Premio from "./telas/Premio";
import ListaPremios from "./telas/ListaPremio";
import CadastroPremioUsuario from "./telas/CadastroPremioUsuario";

export const Rotas = () => {

    const rotas = createBrowserRouter([
        {path: "/",element: <Login />},
        {path: "/home",element: <Home />},
        {path: "/usuario",element: <Usuario />},
        {path: "/usuario/pontos",element: <PontosUsuario />},
        {path: "/premio/usuario",element: <CadastroPremioUsuario />},
        {path: "/usuario/premios",element: <PremiosUsuario />},
        {path: "/premio",element: <Premio />},
        {path: "/premio/lista",element: <ListaPremios />},

    ]);

    return <RouterProvider router={rotas}/>
}

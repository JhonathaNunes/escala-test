import React, {Component} from 'react';
import { SidebarWraper } from './style';

class Sidebar extends Component{
    render(){
        return <SidebarWraper>
            <ul>
                <li>Companies</li>
                <li className="choosenOne">Usuários</li>
                <li>Resetar Senha</li>
                <li>Simulação</li>
            </ul>
        </SidebarWraper>
    }
}

export default Sidebar;
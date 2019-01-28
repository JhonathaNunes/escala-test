import React, {Component} from 'react';
import { StyledTable, TdActive, DivFather, TdExcluir } from './style';

class UsersTable extends Component{
    constructor(props) {
        super(props);

            this.toggle = this.toggle.bind(this);

            this.setUserStatus =  this.setUserStatus.bind(this);

            this.removeUser = this.removeUser.bind(this);

            this.setQuery =  this.setQuery.bind(this);

            this.state = {
                users: [
                    {id:1,user:'Jhonatha Nunes', email:'jhonathasilveira@gmail.com', company:'XPTO Health Company', escalas:5, status:true},
                    {id:2,user:'Miles Morales', email:'mmorales@gmail.com', company:'XPTO Health Company',escalas: 7, status:true},
                    {id:3,user:'George Washington', email:'georgew@gmail.com', company:'XPTO Health Company',escalas: 3, status:true},
                    {id:4,user:'Keanu Reeves', email:'keanureeves@gmail.com', company:'XPTO Health Company',escalas: 8, status:false},
                    {id:5,user:'Abner Silva', email:'abnersilva@gmail.com', company:'XPTO Health Company',escalas: 10, status:true},
                    {id:6,user:'Jhonatha Nunes', email:'jhonathasilveira@gmail.com', company:'XPTO Health Company', escalas:5, status:true},
                ],
               query: ''
            };

        }

        toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
        }

        setQuery(e){
            this.setState({
                query: e.target.value.toUpperCase()
            })
        }

        setUserStatus(userId) {
            let _users = this.state.users;
            _users = _users.map(
                user => {
                    if (user.id === userId){
                        user.status = !user.status
                    }
                return user
            });
            this.setState({
                users:_users
            })
        }

        removeUser(userId){
            let _users = this.state.users;
            _users = _users.filter(
                user => user.id != userId
            )
            this.setState({
                users:_users
            })
        }


    render(){
        let users = this.state.users;
        return <DivFather>
        <div>
            <input placeholder="Pesquise um usuário" type="text" name="query" onChange={this.setQuery}></input>
        </div>
        <StyledTable borderless>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>E-mail</th>
            <th className="noMobile">Company</th>
            <th className="noMobile">Escalas</th>
            <th className="noMobile">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {
            users.map((u, index) => {
                console.log(this.state.query)
                if(!this.state.query){
                    return <tr key={index}>
                        <td>{u.user}</td>
                        <td>{u.email}</td>
                        <td className="noMobileB">{u.company}</td>
                        <td className="noMobileB">{u.escalas}</td>
                        <TdActive className="noMobileB" onClick={() => this.setUserStatus(u.id)} statusColor={confirmStatus(u.status)}>{confirmStatus(u.status)}</TdActive>
                        <TdExcluir onClick={() => this.removeUser(u.id)}>Excluir</TdExcluir>
                    </tr> 
                }else if (u.user.toUpperCase().includes(this.state.query) || u.email.toUpperCase().includes(this.state.query)){
                    return <tr key={index}>
                    <td>{u.user}</td>
                    <td>{u.email}</td>
                    <td className="noMobileB">{u.company}</td>
                    <td className="noMobileB">{u.escalas}</td>
                    <TdActive className="noMobileB" onClick={() => this.setUserStatus(u.id)} statusColor={confirmStatus(u.status)}>{confirmStatus(u.status)}</TdActive>
                    <TdExcluir onClick={() => this.removeUser(u.id)}>Excluir</TdExcluir>
                </tr>
                }
            })

        }
        </tbody>
      </StyledTable>
      </DivFather>
        
    }
}

function confirmStatus(userStatus){
    if (userStatus) {
        return "Ativo";
    }
    return "Inativo";
}

export default UsersTable;
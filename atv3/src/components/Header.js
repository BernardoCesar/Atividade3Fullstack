import { React }from 'react';
import { Layout, Menu, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

const { Header } = Layout;

export default function HeaderComponent () {

  return (
    <Header style={{ height: '100px' , overflowX: 'auto', backgroundColor: "#59048a"}}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '16px' , marginTop:"20px"}}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/017/196/532/non_2x/recycling-symbol-transparent-background-free-png.png"
            alt="Logo"
            style={{ height: '50px', width: '50px' }}
          />
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={['home']} style={{backgroundColor: "#59048a"}}>
          <Button style={{marginRight: 5, backgroundColor:'#59048a', color:"white"}} href="/home">Home</Button>
          <Button style={{marginRight: 5, backgroundColor:'#59048a', color:"white"}} href='/usuario/premios'>Meus Prêmios</Button>
          <Button style={{marginRight: 5, backgroundColor:'#59048a', color:"white"}} href="/usuario/pontos">Meus Pontos</Button>
          <Button style={{marginRight: 5, backgroundColor:'#59048a', color:"white"}} href="/premio">Cadastrar Prêmio</Button>
          <Button style={{marginRight: 5, backgroundColor:'#59048a', color:"white"}} href="/usuario">Cadastrar novo Usuário</Button>
          <Button style={{marginRight: 5, backgroundColor:'#59048a', color:"white"}} href="/premio/usuario">Atribuir Prêmios</Button>
          <Button style={{marginRight: 5, backgroundColor:'#59048a', color:"white"}} href="/premio/lista">Listar Prêmios</Button>

        </Menu>

        <div style={{ display: 'flex', alignItems: 'rigth', marginLeft: 'auto' }}>
            <Button  href="/" style={{ color: 'white'}} icon={<LogoutOutlined style={{ color: 'white', fontSize:"20px"}}/>} type="text">
            Logout
            </Button>
        </div>
      </div>

    </Header>
  );
};


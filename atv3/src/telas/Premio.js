import {React} from 'react';
import { Input, Button, Form, Typography,message} from 'antd';


export default function Premio (){

    const { Title } = Typography;
    const [form] = Form.useForm();

    const cadastrar = async (descricao, quantidade, pontos) => {

        const body = { descricao: descricao , quantidade: quantidade, pontos: pontos}
        const url = "http://localhost:3000/premio";
        const param = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        }

        const resposta = await fetch(url, param);
        const respostaJson = await resposta.json();
        console.log(respostaJson)
        if (respostaJson.status === 200){
            message.success('Prêmio cadastrado!');
        }else if (respostaJson.status !== 200){
            message.error('Erro ao cadastrar o prêmio');
        }
        form.resetFields();
    };

    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                    <Title level={1} style={{ textAlign: 'top', marginBottom: 120 }}>
                        Cadastrar prêmio
                    </Title>
                </div>
                <div>
                <Form name="login"  onFinish={(dados) => cadastrar(dados.descricao, dados.quantidade, dados.pontos)}
                                    onFinishFailed={(erros) => console.log(erros)}
                                    style={{ width: 500 }}
                                    form={form}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Form.Item  name="descricao"
                        rules={[ { required: true, message: 'Insira a descrição do prêmio' } ]}>
                            <Input
                                    placeholder="Descrição"
                                    name='descricao'
                                    style={{ marginBottom: 10, width:300 }} />
                        </Form.Item>
                        <Form.Item  name="quantidade"
                        rules={[ { required: true, min: 1, message: 'Insira a quantidade' } ]}>
                            <Input
                                    type='number'
                                    placeholder="Quantidade"
                                    name="quantidade"
                                    style={{ marginBottom: 10, width: 300}}/>
                        </Form.Item>
                        <Form.Item  name="pontos"
                        rules={[ { required: true, min:1, message:'Insira quantos pontos valem o prêmio' } ]}>
                            <Input
                                    type='number'
                                    placeholder="Pontos"
                                    name="pontos"
                                    style={{ marginBottom: 10, width: 300}}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit"> Cadastrar </Button>
                        </Form.Item>
                    </div>
                </Form>
                </div>
            </div>
}

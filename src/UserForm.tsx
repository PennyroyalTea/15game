import React from 'react';

import {Modal, Typography, Form, Button, Input} from 'antd';

const {Title} = Typography;


export default function UserForm(props: any) {
    return (
        <Modal
            visible={props.visible}
            footer={null}
            closable={false}
        >
            <Title level={3}>Пожалуйста, введите имя пользователя.</Title>
            <Form onFinish={(res: any) => props.submitName(res.name)}>
                <Form.Item
                    label="Имя"
                    name="name"
                    rules={[{ required: true, message: 'Пожалуйста, введите имя!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Отправить
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}
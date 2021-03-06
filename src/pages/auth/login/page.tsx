import React from 'react';

import { Card } from 'ui/atoms/Card';
import { Container, CenterContentTemplate } from 'ui/templates/';
import { Col } from 'libs/styled-layouts';
import { LoginForm } from './LoginForm';

export function LoginPage(): JSX.Element {
  return (
    <CenterContentTemplate>
      <Container justify='center' align='center'>
        <Col align='stretch' width='30rem'>
          <Card>
            <LoginForm />
          </Card>
        </Col>
      </Container>
    </CenterContentTemplate>
  );
}

import {Header, Content, Panel, Placeholder, Col} from 'rsuite';
import {Logo} from "../Components/Main/Logo"

const Main = () => {
    return(
    <div>
        <Header>
            <Panel>
                <Logo></Logo>
            </Panel>
        </Header>
        <Content>
            <Col md={6} sm={12}>
                <Panel bordered header="Card title">
                    <Placeholder.Paragraph />
                </Panel>
            </Col>
        </Content>
    </div>
    )
}


export default Main;
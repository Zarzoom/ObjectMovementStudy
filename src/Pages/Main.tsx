import {Header, Content, Panel, Placeholder, Col} from 'rsuite';
import {Logo} from "../Components/Main/Logo"
import {Portfolio} from "../Components/Main/Portfolio"

const Main = () => {
    return(
    <div>
        <Header>
            <Panel>
                <Logo></Logo>
            </Panel>
        </Header>
        <Content>
            <Portfolio></Portfolio>
        </Content>
    </div>
    )
}


export default Main;
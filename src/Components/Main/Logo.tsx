import {Panel, Col, Row} from "rsuite";
import logo2 from 'src/Images/logo2.png';

export function Logo() {
return(
    <Panel bordered={true} className={"logoBackground"}>
        <Col xs={24}>
            <img src={"logo2"} alt={"Sophia Seely"}/>
        </Col>
    </Panel>
)
}
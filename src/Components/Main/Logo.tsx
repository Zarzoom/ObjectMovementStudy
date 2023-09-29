import {Panel, Col, Row, Whisper, Tooltip} from "rsuite";
import logo2 from 'src/Images/logo2.png';

export function Logo() {
    const toolTip= (<Tooltip>Image Description: Logo that says Sophia Seely.</Tooltip>)
return(
    <Panel bordered={true} className={"logoBackground"}>
        <Col xs={24}>
            <Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={toolTip}>
                <img src={"logo2"} alt={"Sophia Seely"}/>
            </Whisper>
        </Col>
    </Panel>
)
}
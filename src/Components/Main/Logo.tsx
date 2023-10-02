import {Panel, FlexboxGrid, Whisper, Tooltip, Col, IconButton, ButtonToolbar} from "rsuite";
import LinkedinIcon from '@rsuite/icons/legacy/Linkedin';
import GithubIcon from '@rsuite/icons/legacy/Github';
import LogoFinal from '../../Images/LogoFinal.png';

export function Logo() {
    const toolTip= (<Tooltip>Image Description: Logo that says Sophia Seely.</Tooltip>)
return(
    <Panel bordered={true} className={"logoBackground"}>
        <ButtonToolbar>
            <IconButton icon={<LinkedinIcon/>} href={"https://github.com/Zarzoom"} circle></IconButton>
            <IconButton icon={<GithubIcon/>} href={"https://www.linkedin.com/in/sophia-seely-181103167/"} circle></IconButton>
        </ButtonToolbar>
        <FlexboxGrid justify={"center"}>
            <FlexboxGrid.Item>
                <Col lg={3}>
                    <Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={toolTip}>
                        <img src={LogoFinal} alt={"Sophia Seely"} />
                    </Whisper>
                </Col>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    </Panel>
)
}
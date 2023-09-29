import {Panel, Col, Placeholder, Button} from "rsuite";

export function Portfolio() {
    return(
        <div>
        <Panel shaded={true} bordered={true} bodyFill={true} style={{ display: 'inline-block', width: 240 }}>
            <Placeholder graph={"image"}></Placeholder>
            <Panel header="Household Inventory System">
                <p>
                    <small>
                        A program for keeping inventory of the contents of your home.
                    </small>
                </p>
            </Panel>
        </Panel>

        <Button appearance={"primary"} color={"blue"}>Test1</Button>
        </div>
    )
}
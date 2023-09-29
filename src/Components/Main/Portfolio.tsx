import {Panel, Stack, Row, Col, Placeholder, Button, Grid} from "rsuite";

export function Portfolio() {
    return(
        <Grid fluid>
        <div className={"horizontalCenter"}>
        <Stack spacing={3} alignItems={"center"}>
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
        </Stack>
            <div className={"fontColor"}>
            <h1>Testing</h1>
            </div>
        </div>
        </Grid>
    )
}
import {Panel,FlexboxGrid, Placeholder} from "rsuite";

export function Portfolio() {
    return(

            <div>
                <FlexboxGrid justify={"center"}>
                    <FlexboxGrid.Item className={"cardSpacing"}>
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
                </FlexboxGrid.Item>
                    <FlexboxGrid.Item className={"cardSpacing"}>
                        <a href={"https://purple-pebble-066565910.3.azurestaticapps.net/"}>
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
                        </a>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
        </div>
    )
}
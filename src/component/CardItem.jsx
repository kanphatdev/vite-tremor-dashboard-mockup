import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const CardItem = () => {
    return (
        <Card className="w-xs " decoration="top" decorationColor="indigo">
            <Flex justifyContent="between" alignItems="center">
                <BadgeDelta deltaType="moderateIncrease">+12.5%</BadgeDelta>
                <Text>Sales</Text>
            </Flex>
            <Metric>$ 34,743</Metric>
        </Card>
    )
}

export default CardItem
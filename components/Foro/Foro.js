import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
} from "react-native";
import { Avatar, Card, IconButton, Paragraph, Title } from "react-native-paper";

export default function Foro() {
    return (
        <View styles={styles.container}>
            <TouchableOpacity>
                <Text styles={styles.txtForo}>Foro de Discusion</Text>

                {/* <Card.Title
                    title="Card Title"
                    subtitle="Card Subtitle"
                    left={(props) => <Avatar.Icon {...props} icon="folder" />}
                    right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
                /> */}
            </TouchableOpacity>
            {/* <Card> */}
            <Card styles={styles.containerCard}>
                <Card.Content>
                    <Title>JavaScript</Title>
                    <Text>Jose Castillo</Text>
                    <Paragraph>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doanim id est laborum."</Paragraph>
                </Card.Content>
            {/* </Card> */}
            {/* <Text></Text> */}
            {/* <Card styles={styles.containerCard}> */}
            <Text/>
                <Card.Content>
                    <Title>React Native</Title>
                    <Text>Jose Castillo</Text>
                    <Paragraph>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doanim id est laborum."</Paragraph>
                </Card.Content>
            {/* </Card> */}
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        position: "absolute",
        backgroundColor: "",
    },

    txtForo: {
        color: "#1C304A"
    },

    containerCard:{
        marginBottom: 30,
    }
});

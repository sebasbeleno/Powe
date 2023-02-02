import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Platform,
    SafeAreaView,
    StatusBarProps,
} from 'react-native';

interface Props extends StatusBarProps {
    backgroundColor: string;
}
const CustomStatusBar: React.FC<Props> = ({backgroundColor, ...props}: any) => (
    <View style={[styles.statusBar, {backgroundColor}]}>
        <SafeAreaView>
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                barStyle='dark-content'
                {...props}
            />
        </SafeAreaView>
    </View>
);

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    appBar: {
        height: APPBAR_HEIGHT,
    },
    content: {
        flex: 1,
        backgroundColor: '#33373B',
    },
});
export default CustomStatusBar;

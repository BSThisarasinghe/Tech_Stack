import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    UIManager,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    renderDescription() {
        if (this.props.expanded) {
            return (
                <CardSection>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ flex: 1, color: '#000', fontSize: 15 }}>{this.props.library.description}</Text>
                    </View>
                </CardSection>
            );
        }
    }

    render() {

        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <View style={{ backgroundColor: '#123272', flex: 1 }}>
                            <Text style={Styles.titleStyle}>
                                {title}
                            </Text>
                        </View>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

const Styles = {
    titleStyle: {
        fontSize: 18,
        color: '#fff',
        paddingLeft: 15,
    }
}

export default connect(mapStateToProps, actions)(ListItem);
import PropTypes from 'prop-types';
import React from 'react';
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native';

export default class SearchInput extends React.Component {

    state = {
        text: ""
    }

    handleChangeText = (text) => {
        this.setState({ text });
    }

    handleSubmitEditing = () => {
        const {onSubmit} = this.props;
        const {text} = this.state;

        if (!text) {
            return
        }

        onSubmit(text);
        this.setState({ text: "" });
    }


    render() {

        const { placeholder } = this.props;
        const { text } = this.state;

        return (
            <View
                style={styles.container}
            >
                <TextInput /* Input */
                    value={text} /* Valor do Input */
                    style={styles.input}  /* Estilos do input */
                    placeholder={placeholder} /* Texto do placeholder */
                    placeholderTextColor="white" /* Cor do placeholder */
                    onChangeText={this.handleChangeText} /* Função para atualizar o texto */
                    onSubmitEditing={this.handleSubmitEditing} /* Função para submeter o input */
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginTop: 20,
        backgroundColor: '#666',
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    input: {
        flex: 1,
        color: 'white',
    }
})

SearchInput.PropTypes = {
    onSubmit: PropTypes.func.isRequired,	
    placeholder: PropTypes.string,
}

SearchInput.defaultProps = {
    placeholder: '',
}
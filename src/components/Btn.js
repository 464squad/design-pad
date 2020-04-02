import React from 'react';

class Btn extends React.Component {

    state = {
        disabled: false
    };

    handler() {
        let handler = this.props.handler();

        if (handler && Promise.resolve(handler)) {
            // Disable button
            this.setState({disabled: true});
            return handler.then(() => {
                return this.setState({disabled: false});
            }).catch(() => {
                return this.setState({disabled: false});
            });
        }
    }

    attrs() {
        return {
            children : this.props.name,
            type     : 'button',
            role     : 'button',
            onClick  : this.handler.bind(this),
            disabled : this.state.disabled
        };
    }

    render() {
        return <button {...this.attrs()} />;
    }
}

Btn.defaultProps = {
    handler: () => {}
};

export default Btn;
import React from 'react';

import classes from './ErrorLabel.module.css';
import Backdrop from './Backdrop/Backdrop';

const errorLabel = props => {
    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={classes.ErrorLabel}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>
        </React.Fragment>
    );
};

export default React.memo(
    errorLabel,
    (prevProps, nextProps) =>
        nextProps.show === prevProps.show &&
        nextProps.children === prevProps.children
);

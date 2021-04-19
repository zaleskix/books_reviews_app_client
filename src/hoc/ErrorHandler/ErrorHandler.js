import React from 'react';

import ErrorLabel from '../../components/UI/ErrorLabel/ErrorLabel';
import useHttpErrorHandler from './ErrorHandlerHook/ErrorHandlerHook';

const errorHandler = (WrappedComponent, axios) => {
    return props => {
        const [error, clearError] = useHttpErrorHandler(axios);

        return (
            <React.Fragment>
                <ErrorLabel show={error} modalClosed={clearError}>
                    {error ? error.response.data.message : null}
                </ErrorLabel>
                <WrappedComponent {...props} />
            </React.Fragment>
        );
    };
};

export default errorHandler;

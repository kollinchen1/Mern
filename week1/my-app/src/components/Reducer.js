import React, { useReducer } from 'react';

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        console.log(e.target)
        const { value, error } = e.target;
        dispatch({
            type: value,
            payload: error
        });
    }

    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <label>
                    <span>First Name:</span>{' '}
                    <input
                        name="firstName"
                        value={state.firstName.value}
                        onChange={handleChange}
                    />
                </label>
                {state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )}
            </div>
            <div>
                <label>
                    <span>Last Name:</span>{' '}
                    <input
                        name="lastName"
                        value={state.lastName.value}
                        onChange={handleChange}
                    />
                </label>
                {state.lastName.error !== null && (
                    <p className="error">{state.lastName.error}</p>
                )}
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email.value}
                        onChange={handleChange}
                    />
                </label>
                {state.email.error !== null && (
                    <p className="error">{state.email.error}</p>
                )}
            </div>
        </div>
    );
}
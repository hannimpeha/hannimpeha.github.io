import React from 'react';

export default (props) => {
    const {
        cancel,
        errors,
        submit,
        submitButtonText,
        elements,
    } = props;

    function handleSubmit(event) {
        event.preventDefault();
        submit();
    }

    function handleCancel(event) {
        event.preventDefault();
        cancel();
    }

    return (
        <div>
            <ErrorsDisplay errors={errors} />
            <form onSubmit={handleSubmit}>
                {elements()}
                <div>
                    <button type="submit">{submitButtonText}</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

function ErrorsDisplay({ errors }) {
    let errorsDisplay = null;
    if (errors.length) {
        errorsDisplay = (
            <div>
                <div>
                    <ul>
                        {errors.map((error, i) => <li key={i}>{error}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
    return errorsDisplay;
}

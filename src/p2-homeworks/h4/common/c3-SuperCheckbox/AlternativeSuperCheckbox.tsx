import React from "react";
import {Checkbox} from '@material-ui/core';

function AlternativeSuperCheckbox() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: any) => {
        setChecked(event.target.checked);
    };
    return (
        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
    );
}

export default AlternativeSuperCheckbox;

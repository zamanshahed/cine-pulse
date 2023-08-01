'use client'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

const TodoItem = ({
    label = '',
    completed = false,
    onClick = () => { },
}) => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    sx={{
                        color: "red",
                        '&.Mui-checked': {
                            color: "red",
                        },
                    }}
                    value={completed}
                    onChange={(e) => onClick(e)}
                />
            } label={label}
        />
    )
}

export default TodoItem
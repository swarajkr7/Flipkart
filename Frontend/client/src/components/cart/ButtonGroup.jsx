



import { Button, ButtonGroup, styled } from '@mui/material';

const Components = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`



const GroupedButton = () => {
    return (
        <Components>
            <Button>-</Button>
            <Button>1</Button>
            <Button>+</Button>
        </Components>
    )
}

export default GroupedButton;
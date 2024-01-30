import { Button } from 'react-native';
function DefaultButton({title, color, ...props}) {
    return (
        <Button title={title} color={color} {...props}/>
    );
}

export default DefaultButton
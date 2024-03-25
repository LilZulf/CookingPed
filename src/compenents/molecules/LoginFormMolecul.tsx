import React from 'react'
import TextAtom from '../atoms/TextAtom'
import TextInputAtom from '../atoms/TextInputAtom'
import ButtonAtom from '../atoms/ButtonAtom'
import { View } from 'react-native'

interface LoginFormMoleculeProps {
    onLogin: () => void;
}
const LoginFormMolecul: React.FC<LoginFormMoleculeProps> = ({onLogin}) => {
    const handleLogin = () => {
        // Handle login logic
        onLogin();
    };
    return (
        <View>
            <TextInputAtom placeholder="Username" />
            <TextInputAtom placeholder="Password" />
            <ButtonAtom title="Login" onPress={handleLogin} />
        </View>
    )
}

export default LoginFormMolecul
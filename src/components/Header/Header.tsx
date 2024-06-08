import { Button } from '@src/components/Button';
import { LuckyDateIcon } from '../Icons'

import * as S from './styles'
import { Icon } from "@src/components/Icons/types";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const backToHome = () => navigate("/");

    return (
        <S.Header>
            <LuckyDateIcon onClick={backToHome} />
            <S.Actions>
                <Button.Root color='secondary'>
                    <Button.Icon icon={Icon.HELP} />
                </Button.Root>

                <Button.Root>
                    <Button.Icon icon={Icon.RANDOM} />
                </Button.Root>

            </S.Actions>
        </S.Header>
    )
}

export default Header;

import { Button } from '@src/components/Button';
import { LuckyDateIcon } from '../Icons'

import * as S from './styles'
import { IconType } from '@src/types/types';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const backToHome = () => navigate("/");

    return (
        <S.Header>
            <LuckyDateIcon onClick={backToHome}/>
            <S.Actions>
                <Button.Root>
                    <Button.Icon icon={IconType.HELP} />
                </Button.Root>

                <Button.Root isPrimary>
                    <Button.Icon icon={IconType.RANDOM} />
                </Button.Root>

            </S.Actions>
        </S.Header>
    )
}

export default Header;

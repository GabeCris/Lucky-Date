import { Button } from '@src/components/Button';
import { LuckyDateIcon } from '../Icons'

import * as S from './styles'
import { Icon } from "@src/components/Icons/types";
import { useNavigate } from 'react-router-dom';
import Grid from '../Utils/Grid';

interface Categories {
    text: string;
    icon: Icon;
    id: string;
    name?: string;
}

interface ScoreBoardType {
    items: Categories[]
}

const ScoreBoard = ({ items }: ScoreBoardType) => {
    console.log(items)

    const hasMoreThanSix = items.length > 6;
    const gridStyle = { gridGap: `8px ${hasMoreThanSix ? '16px' : '32px'}` }

    return (
        <S.Board>
            <Grid columns={hasMoreThanSix ? 3 : 2} style={gridStyle}>
                {items.map((item, index) => {
                    const excluded = index % 2 == 0
                    console.log(excluded)

                    return (
                        <S.Item excluded={excluded}>
                            <S.Index>
                                {String(index + 1).padStart(2, '0')}
                            </S.Index>
                            <S.Text>
                                {item.text}
                            </S.Text>
                        </S.Item>
                    )
                })}
            </Grid>
        </S.Board>
    )
}

export default ScoreBoard;

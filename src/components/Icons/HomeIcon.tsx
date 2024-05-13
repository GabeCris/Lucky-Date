import React from 'react'
import * as S from './styles'

const HomeIcon = (props: React.ComponentProps<'svg'>) => {
    return (
        <S.Icon width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M8.70704 0.292893C8.51951 0.105422 8.26521 0.000106812 8.00004 0.000106812C7.73488 0.000106812 7.48057 0.105422 7.29304 0.292893L0.293041 7.29289C0.110883 7.4815 0.0100885 7.7341 0.0123669 7.99629C0.0146453 8.25849 0.119814 8.5093 0.305222 8.69471C0.490631 8.88012 0.741443 8.98529 1.00364 8.98757C1.26584 8.98985 1.51844 8.88905 1.70704 8.70689L2.00004 8.41389V14.9999C2.00004 15.2651 2.1054 15.5195 2.29293 15.707C2.48047 15.8945 2.73482 15.9999 3.00004 15.9999H5.00004C5.26526 15.9999 5.51961 15.8945 5.70715 15.707C5.89468 15.5195 6.00004 15.2651 6.00004 14.9999V12.9999C6.00004 12.7347 6.1054 12.4803 6.29293 12.2928C6.48047 12.1053 6.73482 11.9999 7.00004 11.9999H9.00004C9.26526 11.9999 9.51961 12.1053 9.70715 12.2928C9.89468 12.4803 10 12.7347 10 12.9999V14.9999C10 15.2651 10.1054 15.5195 10.2929 15.707C10.4805 15.8945 10.7348 15.9999 11 15.9999H13C13.2653 15.9999 13.5196 15.8945 13.7071 15.707C13.8947 15.5195 14 15.2651 14 14.9999V8.41389L14.293 8.70689C14.4816 8.88905 14.7342 8.98985 14.9964 8.98757C15.2586 8.98529 15.5095 8.88012 15.6949 8.69471C15.8803 8.5093 15.9854 8.25849 15.9877 7.99629C15.99 7.7341 15.8892 7.4815 15.707 7.29289L8.70704 0.292893Z" fill="#4D5B97" />
        </S.Icon>
    )
}

export default HomeIcon
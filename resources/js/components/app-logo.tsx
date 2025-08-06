import { Link } from '@inertiajs/react';
import { To } from 'history';

// material-ui
import ButtonBase from '@mui/material/ButtonBase';
import { SxProps } from '@mui/system';

// project-imports
import AppLogoMain from './app-logo-main';
import AppLogoIcon from './app-logo-icon';
import { APP_DEFAULT_PATH } from '@/config';
// import useAuth from 'hooks/useAuth';

interface Props {
    isIcon?: boolean;
    sx?: SxProps;
    to?: To;
  }

export default function AppLogo({ isIcon, sx, to }: Props) {
    return (
        <ButtonBase disableRipple {...({ component: Link, to: !to ? APP_DEFAULT_PATH : to, sx })}>
            {isIcon ? <AppLogoIcon /> : <AppLogoMain />}
        </ButtonBase>
    );
}

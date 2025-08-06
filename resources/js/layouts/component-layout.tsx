import { lazy, useEffect } from 'react';
import { type ReactNode } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

// project-imports
import Drawer from './component/Drawer';
import { handlerComponentDrawer, useGetMenuMaster } from '@/api/menu';
import { DRAWER_WIDTH } from '@/config';

import ThemeCustomization from '../themes';


const Header = lazy(() => import('./component/Header'));

// components content
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{ open: boolean }>(({ theme }) => ({
  minHeight: `calc(100vh - 180px)`,
  width: `calc(100% - ${DRAWER_WIDTH}px)`,
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  [theme.breakpoints.down('md')]: {
    paddingLeft: 0
  },
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        })
      }
    }
  ]
}));


// ==============================|| MINIMAL LAYOUT ||============================== //

export default function ComponentLayout({ children }: { children: ReactNode }) {

    const theme = useTheme(); // Ensure theme is available
    const downMD = useMediaQuery(theme.breakpoints.down('md'));
      const { menuMaster } = useGetMenuMaster();
    
      useEffect(() => {
        handlerComponentDrawer(!downMD);
      }, [downMD]);


    return (
    <ThemeCustomization>
    <Container maxWidth="xl" sx={{ px: { xs: 0, sm: 2.5 } }}>
    <Header />
    <Toolbar sx={{ mt: 2 }} />
            <Box sx={{ display: 'flex', pt: menuMaster.isComponentDrawerOpened ? { xs: 0, md: 2.5 } : 0 }}>
                <Drawer />
                <Main open={menuMaster.isComponentDrawerOpened}>
                    {children}
                </Main>
            </Box>
    </Container>
    </ThemeCustomization>
);
}

import { Slidebar } from '@/components/Slidebar';
import {UseAth} from '@/Hooks/UseAuth';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';

export const Mainlayout = () => {
    UseAth()
    return ( 
        <Container maxWidth="sm">
<header>
    <nav>

    </nav>
</header>
<main>
    
    <Outlet/>
</main>
<footer></footer>
        </Container>
     );
}
 
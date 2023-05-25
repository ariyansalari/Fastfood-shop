import { Slidebar } from '@/components/Slidebar';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';

export const Mainlayout = () => {
    return ( 
        <Container maxWidth="sm">
<header>
    <nav>


    <Slidebar/>

    </nav>
</header>
<main>
    
    <Outlet/>
</main>
<footer></footer>
        </Container>
     );
}
 
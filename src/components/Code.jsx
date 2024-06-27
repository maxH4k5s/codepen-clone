import { useContext } from "react";
import Editor from "./Editor";
import { Box, styled } from '@mui/material';
import { DataContext } from '../context/DataProvider';


const Container = styled(Box)`
    display: flex;
    background-color: #060606;
    height: 55vh;
`

const Code = () => {

    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext)

    return (
        <Container>
            <Editor
                language="xml"
                heading="Html"
                icon="/"
                color="#ff3c41"
                value={html}
                onChange={setHtml}
            />

            <Editor
                language="css"
                heading="Css"
                icon="*"
                color="#0ebeff"
                value={css}
                onChange={setCss}

            />
            <Editor
                language="javascript"
                heading="Javascript"
                icon="( )"
                color="#fcd000"
                value={js}
                onChange={setJs}

            />
        </Container>
    )
}

export default Code;

import type { NextPage } from 'next'
import Head from 'next/head'
import { ThemeProvider } from "styled-components";
import { ProvideSettings, useSettings } from '../components/Settings';
import Customh1 from '../components/styled/Customh1.styled';
import GlobalStyles from '../components/styled/GlobalStyles';


const Home: NextPage = () => {
    const settings = useSettings()
    return (
        <ProvideSettings>
            <ThemeProvider theme={settings.theme}>
                <GlobalStyles/>
                <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="This is a test"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <div>
                <Customh1>This is a test</Customh1>
                </div>
            </ThemeProvider>
        </ProvideSettings>
    )
}

export default Home

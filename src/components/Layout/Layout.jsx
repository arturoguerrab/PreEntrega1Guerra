import Header from "../Header/Header"


const Layout = ({ children }) => {
    return (
        <>
            <Header/>

            {children}

            <footer style={{backgroundColor:"black", color:"white", height:"30vh", textAlign:"center"}}>
                FOOTER
            </footer>
        </>
    )
}

export default Layout
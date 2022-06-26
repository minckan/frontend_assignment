
export default function Layout({children}) {
    return (
        <>
            <div>{children}</div>
            {/* Footer */}
            <footer>
                <div className='footer__Container'>
                    <div className='accordian__Accordian'>
                        
                    </div>
                </div>
            </footer>
            <style jsx>{`
                footer {
                    background-color: rgb(250, 250, 250);                
                }
                .footer__Container {
                    box-sizing: border-box;
                    float: none;
                    min-width: 280px;
                    max-width: 768px;
                    padding: 30px 30px 40px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .accordian__Accordian {
                    
                }
            `}</style>
        </>
    )
}
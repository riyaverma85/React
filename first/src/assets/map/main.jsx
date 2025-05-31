import cookData from "./cookData"

const Main=()=>{
    const ans=cookData.map((key)=><cookDesign
    snno={key.csnno}
    nam={key.cnam}
    num={key.cnum }
    />)
    return(

        <>
        <h1>hello welcome</h1>
        <table>
            <tr>
                <td>snno</td>
                <td>nam</td>
                <td>num</td>
            </tr>
            {ans}
        </table>
        </>
    )

}
export default Main;
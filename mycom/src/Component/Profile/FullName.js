import React from "react";


const FullName = () => {
 return (
     <div>
           <form style={{display :"flex" , alignItems : "center" , flexDirection : "column"}}>

            <table>
                <tr>

                <td>FullName :</td>
                <td> <input type="text" placeholder="enter your full Name" /> </td>

                </tr>
            </table>

           </form>
    </div>
           
 )
};

export default FullName;
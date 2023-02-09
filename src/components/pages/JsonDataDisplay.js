import React from 'react'
import JsonData from './../../data.json'

export default function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.title}</td>
                    <td>{info.description}</td>
                </tr>
            )
        }
    )

    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {DisplayData}
                </tbody>
            </table>
        </div>
    )
}

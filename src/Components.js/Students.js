import React, { Component } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';



const rows = [{

    "Id": "2",
    "Name": "namrutha",
    "Age": "19",
    "Course": "MERN",
    "Batch": "July"



},
{
    "Id": "4",
    "Name": "neha",
    "Age": "18",
    "Course": "MERN",
    "Batch": "July"

},
{
    "Id": "6",
    "Name": "divya",
    "Age": "20",
    "Course": "MERN",
    "Batch": "July"

},
{
    "Id": "8",
    "Name": "palak",
    "Age": "21",
    "Course": "MERN",
    "Batch": "July"

},
{
    "Id": "10",
    "Name": "vaishnavi",
    "Age": "22",
    "Course": "MERN",
    "Batch": "July"
},
{
    "Id": "12",
    "Name": "nandini",
    "Age": "24",
    "Course": "MERN",
    "Batch": "July"

}

];
const addstud=()=>{
    console.log('hello')
    

}


export default class Students extends Component {
   
    render() {
        
        return (
            <div>
                <div>
                    <button className='button' onClick={addstud}>Add Student</button>
                </div>
                <div>
                    <h1 className='mainhead'>StudentsCompo</h1>
                </div>
                <div className='container'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} className='table' aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><h4>Name</h4></TableCell>
                                    <TableCell align="right"><h4>Age</h4></TableCell>
                                    <TableCell align="right"><h4>Course</h4></TableCell>
                                    <TableCell align="right"><h4>Batch</h4></TableCell>
                                    <TableCell align="right"><h4 className='change'>Change</h4></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.Id}
                                    // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.Name}
                                        </TableCell>
                                        <TableCell align="right">{row.Age}</TableCell>
                                        <TableCell align="right">{row.Course}</TableCell>
                                        <TableCell align="right">{row.Batch}</TableCell>
                                        <TableCell align="right" ><h4 className="changecolor"  ><Link to='' > Edit</Link></h4></TableCell>


                                        {/* </Link> */}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

            </div>
        )
    }
}

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


const Home = () => {

    const [name, setName] = useState("");
    const [desc, setDescription] = useState("");

    const [data, setData] = useState([]);

    const addData = () => {
        setData([...data, { name, desc }]);
        setName("");
        setDescription("");
    }

    const removeData = (index) => {
        let arr = data;
        arr.splice(index, 1);
        setData([...arr]);
    }

    return (
        <>
            {/* form section  */}
            <div className='form'>
                <Stack spacing={2} direction="row">

                    <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        color="primary" />

                    <TextField
                        value={desc}
                        onChange={(e) => setDescription(e.target.value)}
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                        color="primary" />

                    <Button
                        onClick={addData}
                        variant="contained">
                        <AddIcon />
                    </Button>

                </Stack>
            </div>

            {/* data section  */}
            <div className="data">
                <div className="data-heading">
                    <h3>Name</h3>
                    <h3>Description</h3>
                    <h3>Remove</h3>
                </div>

                {
                    data.map((element, index) => {
                        return (
                            <div key={index} className="data-content">
                                <h3>{element.name}</h3>
                                <h3>{element.desc}</h3>
                                <Button
                                    onClick={() => removeData(index)}
                                    variant="contained"
                                    color='error'>
                                    <DeleteIcon />
                                </Button>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Home

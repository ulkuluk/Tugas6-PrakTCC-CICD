import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { BASE_URL } from "../utils";

const AddCatatan = () => {
const [Judul, setJudul] = useState('');
const [Isi, setIsi] = useState('');
const [Tanggal, setTanggal] = useState('');
const navigate = useNavigate();

const saveCatatan = async(e) => {
    e.preventDefault();
    try {
        await axios.post(`${BASE_URL}/add-catatan`, {
        Judul,
        Isi,
        Tanggal,
        });
        navigate('/');
    }catch (error) {
        console.log(error);
    }
};
  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveCatatan}>
                <div className='field'>
                    <label className='label'>Judul</label>
                    <div className='control'>
                        <input 
                        type="text" 
                        className='input'
                        value={Judul}
                        onChange={(e) => setJudul(e.target.value)} 
                        placeholder='Judul'/>
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Isi</label>
                    <div className='control'>
                    <textarea 
                        type="text" 
                        className='textarea'
                        value={Isi}
                        onChange={(e) => setIsi(e.target.value)}
                        placeholder='Isi'></textarea>
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Tanggal</label>
                    <div className='control'>
                        <input 
                        type="text" 
                        className='input' 
                        value={Tanggal}
                        onChange={(e) => setTanggal(e.target.value)}
                        placeholder='Tanggal'/>
                    </div>
                </div>
                <div className='field'>
                    <button type='submit' className='button is-success'>
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddCatatan
import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { BASE_URL } from "../utils";

const CatatanList = () => {

    const [catatan, setCatatan] = useState([]);

    useEffect(() => {
        getCatatan();
    }, []);

    const getCatatan = async() => {
        const response = await axios.get(`${BASE_URL}/catatan`);
        setCatatan(response.data);
    }

    const deleteCatatan = async (id) => {
        try {
          await axios.delete(`${BASE_URL}/delete-catatan/${id}`);
          getCatatan();
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <Link to={`add`} className='button is-success'>Tambah Catatanns</Link>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Isi</th>
                    <th>Tanggal</th>
                    <th>Actions</th>
                </tr>
            </thead> 
            <tbody>
                {catatan.map((catatan, index) => (
                    <tr key={catatan.id}>
                        <td>{index + 1}</td>
                        <td>{catatan.Judul}</td>
                        <td>{catatan.Isi}</td>
                        <td>{catatan.Tanggal}</td>
                        <td>
                            <td><Link to={`edit/${catatan.id}`}className='button is-small is-info'>Detail</Link></td>
                            <td><button onClick={() => deleteCatatan(catatan.id)} className='button is-small is-danger'>delete</button></td>
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </table>

        </div>
    </div>
  )
}

export default CatatanList
import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from "../utils";

const CatatanList = () => {
    const [catatan, setCatatan] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getCatatan();
    }, []);

    const getCatatan = async() => {
        try {
            const response = await axios.get(`${BASE_URL}/catatan`, { withCredentials: true });
            setCatatan(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteCatatan = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/delete-catatan/${id}`, { withCredentials: true });
            getCatatan();
        } catch (error) {
            console.log(error);
        }
    };

    const Logout = async () => {
        try {
            await axios.delete(`${BASE_URL}/logout`, { withCredentials: true }); // atau axios.get/post sesuai backend
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <div className="buttons mb-3">
                    <Link to={`/add`} className='button is-success'>Tambah Catatan</Link>
                    <button onClick={Logout} className='button is-danger'>Logout</button>
                </div>
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
                                <td className="buttons">
                                    <Link to={`/edit/${catatan.id}`} className='button is-small is-info'>Detail</Link>
                                    <button onClick={() => deleteCatatan(catatan.id)} className='button is-small is-danger'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CatatanList;

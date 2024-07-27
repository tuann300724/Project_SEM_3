import React, { useEffect, useState } from 'react';
import './PackageList.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';


function PackageList() {
    const [packages, setPackages] = useState([]);
    const fetchPosts = async () => {
        try {
            const result = await axios.get("http://localhost:5081/api/Package");
          
            setPackages(result.data.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5081/api/Package/${id}`);
            fetchPosts();  
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };
    useEffect(() => {
        fetchPosts();
    }, []);
    console.log(packages)

    return (
        <div className="package-list">
            <h1>Package List</h1>
            <div className="actions">
                <div className="btn">
                    <Link to="/admin/AddPackage"> <button className="btn btn-primary">+ New</button></Link>
                </div>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Package Name</th>
                            <th>Price</th>
                            <th>VAT</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {packages.map((item,index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.vat}</td>                       
                                <td>
                                     <Link to={`/admin/EditPackage/${item.id}`}>
                                        <button className="btn edit">Edit</button>
                                    </Link>
                                    <button className="btn delete" onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PackageList;

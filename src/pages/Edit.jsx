import React, { useState } from "react";

function Edit() {
    const emptyForm = { name: '', content: '' };
    const [formData, setFormData] = useState(emptyForm);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handlePost = (e) => {
        e.preventDefault(); // Prevents the default form submission
        setFormData(emptyForm);
        alert('Success: submitted');
    }


    return <form className="container-md mt-4 d-flex flex-column row-gap-3" onSubmit={handlePost}>
        <div>
            <label className="form-label">Name</label>
            <input type="text"
                name="name"
                className="form-control"
                style={{ maxWidth: '300px' }}
                value={formData.name}
                onChange={handleInputChange}
            />
        </div>
        <div>
            <label className="form-label">Content</label>
            <textarea className="form-control"
                name="content"
                style={{ maxWidth: '800px', minHeight: '300px' }}
                value={formData.content}
                onChange={handleInputChange}
            />
        </div>
        <button type="submit"
            className="btn btn-primary"
            style={{ width: '70px' }}
        >Post</button>
    </form>
}

export default Edit;
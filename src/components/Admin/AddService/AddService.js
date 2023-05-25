import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
// import Sidebar from '../Sidebar/Sidebar';


const AddService = () => {
    const [info, setInfo] = React.useState({});
    const [file, setFile] = React.useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        console.log(e.target.name, e.target.value);
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    // console.log(info.title, info.description);

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        console.log(newFile);
        setFile(newFile);
    }
    const handleSubmit = (e) => {
        const formData = new FormData()
        // console.log(info);
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('male', info.male);
        formData.append('description', info.description);
        formData.append('price', info.price);
        console.log(formData);

        fetch('http://localhost:9000/addService', {
            method: 'POST',
            // headers: { 'content-type': 'application/json' },
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                e.target.reset()
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault()
    }
    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand text-center">Add a Service</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Service Title</label>
                        <input class="form-control" onBlur={handleBlur} type="text" className="form-control" name="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="meal">Meal</label>
                        <input class="form-control" onBlur={handleBlur} type="text" className="form-control" name="meal" />
                    </div>

                    <div class="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea class="form-control" onBlur={handleBlur} id="exampleFormControlTextarea1" name="description" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input class="form-control" onBlur={handleBlur} type="number" className="form-control" name="price" />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlFile1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" class="form-control-file" id="exampleFormControlFile1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;
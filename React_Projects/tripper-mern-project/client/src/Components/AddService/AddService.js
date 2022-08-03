import React, { useRef } from 'react';
import useTours from '../../hooks/useTours';

const AddService = () => {
    const name = useRef('');
    const description = useRef('');
    const price = useRef('');
    const image = useRef('');
    const { submit } = useTours();
    const handleSubmit = (e) => {
        e.preventDefault();

        submit({
            title: name.current.value,
            description: description.current.value,
            price: price.current.value,
            image: image.current.value
        });
        alert('Service Added');
        e.target.reset();
    };
    return (
        <form className="w-75 mx-auto py-5" onSubmit={handleSubmit}>
            <h2 className="text-center my-5">Add New Service</h2>
            <div className="row mb-3">
                <label htmlFor="title" className="col-sm-2 col-form-label">
                    Title{' '}
                </label>
                <div className="col-sm-10">
                    <input type="text" ref={name} className="form-control" id="title" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="description" className="col-sm-2 col-form-label">
                    Description{' '}
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        ref={description}
                        className="form-control"
                        id="description"
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="image" className="col-sm-2 col-form-label">
                    Image Link{' '}
                </label>
                <div className="col-sm-10">
                    <input type="text" ref={image} className="form-control" id="image" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="price" className="col-sm-2 col-form-label">
                    Price{' '}
                </label>
                <div className="col-sm-10">
                    <input type="text" ref={price} className="form-control" id="price" />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">
                Add Service
            </button>
        </form>
    );
};

export default AddService;

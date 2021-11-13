import React, { useEffect, useState } from 'react';
import { IoStar, IoStarOutline, IoTrash } from 'react-icons/io5';
import Rating from 'react-rating';
import useAuth from '../../../../hooks/useAuth';

const ManageProducts = () => {
    const [products, setProducts] = useState();

    const { user } = useAuth();
    const email = user.email;

    //load all products
    useEffect(() => {
        fetch(`https://vast-fjord-76006.herokuapp.com/products`)
            .then(res => res.json())
            .then(result => {
                setProducts(result)
            })
    }, [email])

    /* ====================================
            handle the delete button
    ====================================== */
    const handleDelete = (id) => {
        if (window.confirm('Are sure to delete?')) {
            fetch(`http://localhost:5000/deleteProduct/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        const newProducts = products.filter(product => product._id !== id)
                        setProducts(newProducts)
                    }
                });
        }
    };
    return (
        <div className="container mx-auto">
            <h1 className="text-center text-4xl font-bold tracking-wide text-gray-600 py-8">MANAGE PRODUCTS : {products?.length}</h1>

            {products?.map((product, index) =>
                <div key={product._id} className="grid grid-cols-12 mb-4 pb-2">

                    <div className="bg-indigo-100 pt-5 pb-2 text-lg text-center font-medium col-span-12 lg:col-span-1">
                        <div>{index + 1}</div>
                    </div>
                    <div className="bg-indigo-100 pt-5 pb-2 text-lg text-center font-medium  col-span-12 lg:col-span-4">
                        <div>{product?.title}</div>
                    </div>
                    <div className="bg-indigo-100 pt-5 pb-2 text-lg  font-medium  col-span-12 lg:col-span-3">
                        <div className="flex items-center justify-center">
                            <div>
                                <Rating
                                    placeholderRating={product.rating}
                                    emptySymbol={<IoStarOutline className="text-xl text-yellow-500" />}
                                    placeholderSymbol={<IoStar className="text-yellow-500 text-xl" />}
                                    fullSymbol={<IoStar />}
                                    readonly
                                />
                            </div>
                            <div className="text-xl  ml-3 mb-2">({product.review})</div>
                        </div>
                    </div>
                    <div className="bg-indigo-100 pt-5 pb-2 text-lg text-center font-medium  col-span-12 lg:col-span-2">
                        <div className="text-center text-xl">Price : {product.price}$</div>
                    </div>
                    <div className="bg-indigo-100 pt-5 pb-2 text-lg text-center font-medium  col-span-12 lg:col-span-2">
                        <button
                            className="bg-red-500 text-white py-2 px-3 rounded-xl hover:bg-red-400" onClick={() => handleDelete(product._id)}><IoTrash />
                        </button>
                    </div>

                </div>)}
        </div >
    );
};

export default ManageProducts;
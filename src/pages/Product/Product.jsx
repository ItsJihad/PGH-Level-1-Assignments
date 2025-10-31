import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";

export default function Product() {
  const plants = useLoaderData();
  const { id } = useParams();
  const parsedId = parseInt(id);
  const plant = plants.find((plant) => plant.plantId === parsedId);

  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Consultation booked successfully!");
    setForm({ name: "", email: "" });
  };

  return (
    <div className="w-11/12 mx-auto py-20 space-y-10">
      <ToastContainer />

      {/* Product Info */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="flex-1">
          <img
            src={plant.image}
            alt="Product"
            className="rounded-xl shadow-2xl w-full lg:h-[500px] object-cover"
          />
        </div>

        <div className="flex-1 space-y-5">
          <h2 className="text-4xl font-bold text-green-500">{plant.plantName}</h2>

          <div className="flex stats-horizontal shadow">
            <div className="stat">
              <div className="stat-title">Price</div>
              <div className="stat-value">${plant.price}</div>
            </div>
            <div className="stat">
              <div className="stat-title">{plant.rating}</div>
              <p>⭐</p>
            </div>
            <div className="stat">
              <div className="stat-title">Stock</div>
              <div className="stat-value">{plant.availableStock}</div>
            </div>
          </div>
            <h2 className="text-4xl font-bold text-green-500 mb-5">Description</h2>
          <p className="mt-5 text-justify opacity-70">{plant.description}</p>
          <div className="">
            {/* Book Consultation Form */}
      <div className="">
        <h2 className="text-3xl font-bold text-green-500 mb-5">
          Book Consultation
        </h2>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
          <button
            type="submit"
            className="btn btn-success text-white shadow-lg hover:shadow-2xl"
          >
            Book Now
          </button>
        </form>
      </div>
          </div>
        </div>
        
      </div>

      

      <div className="divider"></div>
    </div>
  );
}

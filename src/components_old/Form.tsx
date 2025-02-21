import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
    name: string;
    adult: string;
    child: string;
    stay: string;
    fromDate: string;
    toDate: string;
    country: string;
}

const ClientForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        adult: '',
        child: '',
        country: "",
        fromDate: "",
        stay: "",
        toDate: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Adult</label>
                    <input
                        type="number"
                        name="adult"
                        value={formData.adult}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Child</label>
                    <input
                        type="number"
                        name="child"
                        value={formData.child}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Stay Count</label>
                    <input
                        type="text"
                        name="stay"
                        value={formData.stay}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">From Date</label>
                    <input
                        type="date"
                        name="fromDate"
                        value={formData.fromDate}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">To Date</label>
                    <input
                        type="date"
                        name="toDate"
                        value={formData.toDate}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div >
                    <label className="block text-gray-700">Country</label>
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Country</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Australia">Australia</option>
                    </select>
                </div>
                <div className="col-span-4 flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ClientForm;

import axios from "axios";

// standard port for express
const PORT = process.env.PORT || 3001;

// export const getPets = async () => {
//     const { data } = await axios.get(`http://localhost:${PORT}/pets`);
//     console.log("utils getPets: " + data);
//     return data;
// };

export const getPetTypes = async () => {
    const data = await axios.get(`http://localhost:${PORT}/pets`);
    return data.data;
}

export const getPetsPerType = async (type) => {
    const data = await axios.get( `http://localhost:${PORT}/pets/${type}`);
    return data.data;
}

export const getSinglePet = async (type, id) => {
    const data = await axios.get( `http://localhost:${PORT}/pets/${type}/${id}`);
    return data.data;
};

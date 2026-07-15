import axios from "axios";

const API = "https://maitri-ayurveda.onrender.com/api/appointments";

export const bookAppointment = async (appointmentData) => {
  const token = localStorage.getItem("token");

  const response = await axios.post(
    `${API}/book`,
    appointmentData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
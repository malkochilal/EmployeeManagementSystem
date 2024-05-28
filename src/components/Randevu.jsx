import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Randevu = () => {
  const [reservationDate, setReservationdate] = useState("");
  const [isActive, setIsActive] = useState("");
  const [seat, setSeat] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  return <div></div>;
};

export default Randevu;

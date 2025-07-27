import { useParams } from "react-router-dom";
import trainers from "./TrainersMock";

function TrainerDetails() {
  const { id } = useParams();
  const trainer = trainers.find((t) => t.TrainerId === parseInt(id));

  if (!trainer) return <h3>Trainer not found</h3>;

  return (
    <div>
      <h2>{trainer.Name}</h2>
      <p>Email: {trainer.Email}</p>
      <p>Phone: {trainer.Phone}</p>
      <p>Technology: {trainer.Technology}</p>
      <p>Skills: {trainer.Skills.join(", ")}</p>
    </div>
  );
}

export default TrainerDetails;

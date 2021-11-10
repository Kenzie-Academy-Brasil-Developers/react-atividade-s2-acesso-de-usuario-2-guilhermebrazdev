import { useParams } from "react-router";
import { members } from "../../comoponents/Members";
import { Link } from "react-router-dom";

function Customer() {
  const params = useParams();
  const member = members.find((element) => element.id === params.id);
  return (
    <div className="mainBox">
      <div className="info">
        <h1>Detalhes do cliente</h1>

        <p>Nome: {member && member.name}</p>

        <Link to="/">Voltar</Link>
      </div>
    </div>
  );
}

export default Customer;

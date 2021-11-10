import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { members } from "../../comoponents/Members";

import "./company.css";

function Company() {
  const parans = useParams();
  const member = members.find((element) => element.id === parans.id);

  return (
    <div className="mainBox">
      <div className="info">
        <h1>Detalhes da Empresa</h1>

        <p>Nome da empresa: {member && member.name}</p>

        <div className="link">
          <Link to="/">Voltar</Link>
        </div>
      </div>
    </div>
  );
}

export default Company;

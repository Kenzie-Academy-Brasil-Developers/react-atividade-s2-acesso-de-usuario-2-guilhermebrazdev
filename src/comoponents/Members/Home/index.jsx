import "./home.css";

import { Link } from "react-router-dom";

function Home({ membro }) {
  return (
    <div className="mainBox">
      <div className="info">
        {membro.map((element) => (
          <Link
            key={element.id}
            to={
              element.type === "pj"
                ? `/company/${element.id}`
                : `/customer/${element.id}`
            }
          >
            {" "}
            {element.name}
          </Link>
        ))}{" "}
        {console.log(membro)}
      </div>
    </div>
  );
}

export default Home;

import React from "react";

import "./Intro.css";
import ownerImage from "../../assets/images/owner_07.jpg";

const Intro = () => {
  return (
    <section className="intro">
      <h2>Rólunk</h2>
      <div className="wrap">
        <p>
          Családunk és barátaink biztatására 2012-ben megnyitottunk családi
          pizzériánkat. Az olasz konyha szerelmeseiként évtizedek alatt
          tökéletesítettük receptjeinket, melyeknek legfőbb hozzávalója az a
          szeretet és öröm, amellyel készítjük számotokra pizzáinkat. Számos
          főként kistermelő parterünk gondoskodik a minőségi alapanyagokról.
          Éttermünk családias hangulattal és kiváló hazai ill. olasz borokkal
          vár titeket.
        </p>
        <p className="signature">Cili és Laci</p>
        <img src={ownerImage} alt="owners" />
      </div>
    </section>
  );
};

export default Intro;

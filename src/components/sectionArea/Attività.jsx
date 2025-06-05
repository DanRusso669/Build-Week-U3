import ButtonShowAll from "../ButtonShowAll";

const Attività = () => {
  return (
    <>
      <div className="rounded-top-3 mt-2 bg-white p-4 border border-bottom-0" id="activityArea">
        <h5>Attività</h5>
        <p className="fw-light">582 follower</p>
        <p className="fw-light my-2 fontSize075">
          <span className="fw-bolder">Stefano Miceli</span> ha commentato un post • 8m
        </p>
        <p className="border-bottom pb-3">
          Grande Luca! Ti faccio i complimenti per la professionalità e tenacia con cui hai portato avanti questo percorso. I miei migliori auguri per il
          prossimo futuro, sicuramente ricco di soddisfazioni!👏👏
        </p>
        <p className="fw-light mt-3 mb-2 fontSize075">
          <span className="fw-bolder">Stefano Miceli</span> ha commentato un post • 11m
        </p>
        <p>Grande Gianluca! I migliori auguri per le prossime avventure 🚀🚀</p>
      </div>
      <ButtonShowAll />
    </>
  );
};

export default Attività;

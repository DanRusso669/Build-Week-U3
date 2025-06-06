import { Col, Container, Form, Row } from "react-bootstrap";
import FirstLeftCard from "./homeComponets/FirstLeftCard";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Lavoro = () => {
  const [offers, setOffers] = useState(null);

  const [selectedJob, setSelectedJob] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const markup = { __html: selectedJob.description };
  const { query } = useParams();

  const key = import.meta.env.VITE_STRIVE_TOKEN;

  const fetchJobs = async () => {
    try {
      const resp = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?limit=10&search=${query}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + key,
        },
      });
      if (resp.ok) {
        let arrOffers = await resp.json();
        setOffers(arrOffers);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [query]);

  useEffect(() => {
    console.log(offers);
  }, [offers]);

  const handleClick = data => {
    if (selectedJob._id === data._id) {
      setSelectedJob({});
    } else {
      setSelectedJob(data);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    navigate(`/lavoro/${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col xs={12} md={5} lg={4} xl={3} className="mb-3">
            <FirstLeftCard />
          </Col>
          <Col xs={12} md={7} lg={8} xl={9}>
            <Row>
              <Col xs={12} className="rounded-3  bg-white border mt-2">
                {query === "none" ? (
                  <>
                    <h2 className="text-center my-3">Cerca una posizione o un'azienda</h2>
                    <Form className="d-flex mx-auto  my-3 " style={{ width: "300px" }} onSubmit={handleSubmit}>
                      <Form.Control
                        type="search"
                        placeholder="Cerca"
                        className="me-2 no-focus"
                        aria-label="Search"
                        value={searchQuery}
                        onChange={e => {
                          setSearchQuery(e.target.value);
                        }}
                      />
                    </Form>
                    <div className="d-flex flex-column align-items-center my-4">
                      <h5>Suggeriti:</h5>
                      <Link to={"/lavoro/developer"}>Developer</Link>
                      <Link to={"/lavoro/fullstack"}>Fullstack</Link>
                      <Link to={"/lavoro/Robots & Pencils"}>Robots & Pencils</Link>
                      <Link to={"/lavoro/eWave"}>eWave</Link>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="mt-3 mb-4 text-center">
                      Ricerca offerte di lavoro per <span className="fst-italic">{query}</span>
                    </h2>
                    {offers !== null &&
                      offers.data.map(offer => (
                        <div
                          className="my-3 ms-3 pb-3 border-bottom "
                          key={offer._id}
                          onClick={() => {
                            handleClick(offer);
                          }}
                        >
                          <h4>{offer.title}</h4>
                          <p>{offer.company_name}</p>
                          <p className="fw-light">{offer.candidate_required_location}</p>
                          {selectedJob._id === offer._id && <div dangerouslySetInnerHTML={markup} className="mt-2" />}
                        </div>
                      ))}
                  </>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Lavoro;

{
  /* <>
  <h2 className="mt-3 mb-4 text-center">
                    Ricerca offerte di lavoro per <span className="fst-italic">{query}</span>
                  </h2>
                  {offers !== null &&
                    offers.data.map(offer => (
                      <div
                        className="my-3 ms-3 pb-3 border-bottom "
                        key={offer._id}
                        onClick={() => {
                          handleClick(offer);
                        }}
                      >
                        <h4>{offer.title}</h4>
                        <p>{offer.company_name}</p>
                        <p className="fw-light">{offer.candidate_required_location}</p>
                        {selectedJob._id === offer._id && <div dangerouslySetInnerHTML={markup} className="mt-2" />}
                      </div>
                    ))}
</> */
}

import { useContext, useEffect, useState } from "react";
import { Button, Container, Stack, Col, Row } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import RegisterModal from "../../components/RegisterModal";
import { useNavigate } from "react-router-dom";
import { db } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import { AuthContext } from "../../contexts/AuthProvider";
import ShelterList from "./ShelterList";
import { ToastContext } from "../../contexts/ToastProvider ";
import { ArrowDown } from "../../assets/icons/OtherIcons";
import Loading from "../../components/Loading";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { setShowToast, setToastText, setVariant } = useContext(ToastContext);
  const [modalShow, setModalShow] = useState(false);
  const [haveShelter, setHaveShelter] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [userPosition, setUserPosition] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const shelterInitialValues = {
    name: "",
    contact: "",
    description: "",
    // aceept conditions
    payment: false,
    time: "",
    havePets: false,
    number: 0,
    //type
    cats: true,
    dogs: true,
    others: true,
    //size
    small: true,
    middle: true,
    big: true,
    //social medias
    facebook: "",
    twitter: "",
    instagram: "",
    images: [],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    if (user) {
      const docRef = doc(db, "shelters", `${user.uid}`);
      getDoc(docRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            setHaveShelter(true);
          }
          setLoading(false);
        })
        .catch((error) => {
          setToastText("Ocorreu um erro ao carregar os dados");
          setVariant("danger");
          setShowToast(true);
        });
    }
  }, [
    haveShelter,
    setHaveShelter,
    user,
    setShowToast,
    setToastText,
    setVariant,
  ]);

  const search = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserPosition([latitude, longitude]);
          setIsSearching(true);
        },
        (error) => {
          setToastText(
            "Para prosseguir com a busca é necessário permitir o acesso a geolocalização"
          );
          setVariant("danger");
          setShowToast(true);
        }
      );
    } else {
      setToastText(
        "Não foi possível acessar a geolocalização nesse navegador!"
      );
      setVariant("danger");
      setShowToast(true);
    }
  };

  if (loading) {
    return (
      <>
        <NavBar />
        <Loading />
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <main className="min-vh-100">
          <Container fluid className="bg-primary">
            <Stack className="d-flex flex-md-row overflow-hidden">
              <Button
                style={{ width: "300px" }}
                variant="light"
                className="mx-auto my-4 p-5 fs-5"
                onClick={search}
              >
                BUSCAR UM LAR
              </Button>
              <Button
                style={{ width: "300px" }}
                variant="light"
                className="mx-auto my-4 p-5 fs-5"
                onClick={() => {
                  haveShelter
                    ? navigate(`/profile/${user.uid}`)
                    : setModalShow(true);
                }}
              >
                {haveShelter ? "VER PERFIL DO LAR" : "CADASTRAR UM LAR"}
              </Button>
            </Stack>
            <RegisterModal
              show={modalShow}
              setModalShow={setModalShow}
              shelterInitialValues={shelterInitialValues}
              type={"Cadastrar"}
            />
            <Row className={isSearching ? "d-block" : "d-none"}>
              <Col className="d-flex justify-content-center">
                <ArrowDown />
              </Col>
            </Row>
          </Container>

          <Container className={isSearching ? "d-block" : "d-none"}>
            <ShelterList
              userPosition={userPosition}
              isSearching={isSearching}
            />
          </Container>
        </main>
        <Footer />
      </>
    );
  }
};

export default Home;

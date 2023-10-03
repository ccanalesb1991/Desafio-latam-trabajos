import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";
import petData from "./data/data";

function App() {
    return (
        <>
            <Header title="Adopta un Perrito" />
            <div className="card-container">
                {petData.map((pet) => (
                    <MyCard
                        id={pet.id}
                        cardTitle={pet.name}
                        cardDescription={pet.description}
                        imgUrl={pet.imgUrl}
                        badgeText={pet.breed}
                        badgeBg={pet.badgeBg}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
}

export default App;

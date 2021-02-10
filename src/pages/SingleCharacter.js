import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

const url = "https://hp-api.herokuapp.com/api/characters";

const SingleCharacter = () => {
    const { id } = useParams();
    const [loading, setLoading] = React.useState(false);
    const [character, setCharacter] = React.useState(null);

    const filterData = (data) => {
        const filteredData = data.filter((d) =>
            d.name.toLowerCase().includes(id.toLowerCase())
        );
        return filteredData;
    };

    React.useEffect(() => {
        setLoading(true);
        async function getCharacter() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                const filteredData = filterData(data);
                console.log(filteredData);
                if (filteredData.length !== 0) {
                    const {
                        name,
                        actor,
                        image,
                        wand,
                        dateOfBirth,
                        eyeColour,
                        patronus,
                        ancestry,
                    } = filteredData[0];
                    const { wood, core, length } = wand;
                    const foo = {
                        name,
                        actor,
                        image,
                        wood,
                        core,
                        length,
                        dateOfBirth,
                        eyeColour,
                        patronus,
                        ancestry,
                    };
                    setCharacter(foo);
                } else {
                    setCharacter(null);
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getCharacter();
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (!character) {
        return <h2 className="section-title">no character to display</h2>;
    }

    const {
        name,
        actor,
        image,
        wood,
        core,
        length,
        dateOfBirth,
        eyeColour,
        patronus,
        ancestry,
    } = character;

    return (
        <section className="section character-section">
            <Link to="/" className="btn btn-primary">
                back home
            </Link>
            <h2 className="section-title">{id}</h2>
            <div className="hero">
                <img src={image} alt={name} />
                <div className="hero-info">
                    <p>
                        <span className="hero-data">name: </span>
                        {name}
                    </p>
                    <p>
                        <span className="hero-data">date of birth: </span>
                        {dateOfBirth}
                    </p>
                    <p>
                        <span className="hero-data">eye colour: </span>
                        {eyeColour}
                    </p>
                    <p>
                        <span className="hero-data">actor: </span>
                        {actor}
                    </p>
                    <p>
                        <span className="hero-data">ancestry: </span>
                        {ancestry}
                    </p>
                    <p>
                        <span className="hero-data">patronus: </span>
                        {patronus}
                    </p>
                    <p>
                        <span className="hero-data">wand's wood: </span>
                        {wood}
                    </p>
                    <p>
                        <span className="hero-data">wand's core: </span>
                        {core}
                    </p>
                    <p>
                        <span className="hero-data">wand's length: </span>
                        {length}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SingleCharacter;

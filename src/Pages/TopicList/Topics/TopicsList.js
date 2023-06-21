import React, { useState, useEffect } from "react";
import TopicService from "../../../Services/TopicService";
import { Link } from "react-router-dom";

const TopicsList = () => {
    const [topics, setTopics] = useState([]);
    const [currentTopic, setCurrentTopic] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        retrieveTopics();
    }, []);

    const onChangeSearchTitle = e => {

        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    const retrieveTopics = () => {
        TopicService.getAll()
            .then(response => {
                setTopics(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveTopics();
        setCurrentTopic(null);
        setCurrentIndex(-1);
    };

    const setActiveTopic = (topic, index) => {
        setCurrentTopic(topic);
        setCurrentIndex(index);
    };

    const removeAllTopics = () => {
        TopicService.removeAll()
            .then(response => {
                console.log(response.data);
                refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByTitle = () => {
        TopicService.findByTitle(searchTitle)
            .then(response => {
                setTopics(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title"
                        value={searchTitle}
                        onChange={onChangeSearchTitle}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByTitle}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h4>Topics List</h4>

                <ul className="list-group">
                    {topics &&
                        topics.map((tutorial, index) => (
                            <li
                                className={
                                    "list-group-item " + (index === currentIndex ? "active" : "")
                                }
                                onClick={() => setActiveTopic(tutorial, index)}
                                key={index}
                            >
                                {tutorial.title}
                            </li>
                        ))}
                </ul>

                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={removeAllTopics}
                >
                    Remove All
                </button>
            </div>
            <div className="col-md-6">
                {currentTopic ? (
                    <div>
                        <h4>Topic</h4>
                        <div>
                            <label>
                                <strong>Title:</strong>
                            </label>{" "}
                            {currentTopic.title}
                        </div>
                        <div>
                            <label>
                                <strong>Description:</strong>
                            </label>{" "}
                            {currentTopic.description}
                        </div>
                        <div>
                            <label>
                                <strong>Status:</strong>
                            </label>{" "}
                            {currentTopic.published ? "Published" : "Pending"}
                        </div>

                        <Link
                            to={"/topics/" + currentTopic.id}
                            className="badge badge-warning"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a Topic...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TopicsList;

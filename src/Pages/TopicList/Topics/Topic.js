import React, {useState, useEffect} from "react";

import TopicDataService from "../../../Services/TopicService";

const Topic = (props) => {
    const initialTopicState = {
        id: null,
        title: "",
        description: "",
        published: false
    };
    const [currentTopic, setCurrentTopic] = useState(initialTopicState);
    const [message, setMessage] = useState("");

    const getTopic = id => {
        TopicDataService.get(id)
            .then(response => {
                setCurrentTopic(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getTopic(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentTopic({ ...currentTopic, [name]: value });
    };

    const updatePublished = status => {
        const data = {
            id: currentTopic.id,
            title: currentTopic.title,
            description: currentTopic.description,
            published: status
        };

        TopicDataService.update(currentTopic.id, data)
            .then(response => {
                setCurrentTopic({ ...currentTopic, published: status });
                console.log(response.data);
                setMessage("The status was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    };

    const updateTopic = () => {
        TopicDataService.update(currentTopic.id, currentTopic)
            .then(response => {
                console.log(response.data);
                setMessage("The topic was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    };

    const deleteTopic = () => {
        TopicDataService.remove(currentTopic.id)
            .then(response => {
                console.log(response.data);
                props.history.push("/topics");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return(
        <div>
            {currentTopic ? (
                <div className="edit-form">
                    <h4>Topic</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={currentTopic.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                                value={currentTopic.description}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                <strong>Status:</strong>
                            </label>
                            {currentTopic.published ? "Published" : "Pending"}
                        </div>
                    </form>

                    {currentTopic.published ? (
                        <button
                            className="badge badge-primary mr-2"
                            onClick={() => updatePublished(false)}
                        >
                            UnPublish
                        </button>
                    ) : (
                        <button
                            className="badge badge-primary mr-2"
                            onClick={() => updatePublished(true)}
                        >
                            Publish
                        </button>
                    )}

                    <button className="badge badge-danger mr-2" onClick={deleteTopic}>
                        Delete
                    </button>

                    <button
                        type="submit"
                        className="badge badge-success"
                        onClick={updateTopic}
                    >
                        Update
                    </button>
                    <p>{message}</p>
                </div>
            ) : (
                <div>
                    <br />
                    <p>Please click on a Topic...</p>
                </div>
            )}
        </div>
    );
};
export default Topic;

import React, { useState } from "react";
import TopicDataService from "../services/TopicService";

const AddTopic = () => {
    const initialTopicState = {
        id: null,
        title: '',
        description: '',
        published: true
    };
    const [topic, setTopic] = useState(initialTopicState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setTopic({ ...topic, [name]: value });
    };

    const saveTopic = () => {
        const data = {
            title: topic.title,
            description: topic.description
        };

        TopicDataService.create(data)
            .then(response => {
                setTopic({
                    id: response.data.id,
                    title: response.data.title,
                    description: response.data.description,
                    published: response.data.published
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newTopic = () => {
        setTopic(initialTopicState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newTopic}>
                        Add
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            required
                            value={topic.title}
                            onChange={handleInputChange}
                            name="title"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            required
                            value={topic.description}
                            onChange={handleInputChange}
                            name="description"
                        />
                    </div>

                    <button onClick={saveTopic} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddTopic;
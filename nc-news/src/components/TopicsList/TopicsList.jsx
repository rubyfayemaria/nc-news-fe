import { useEffect, useState } from "react";
import {fetchTopics} from "../../api";
import { Route, Routes } from 'react-router-dom';
import TopicCard from "../TopicCard";

const TopicsList = () => {
    const [topics, setTopics] = useState([]);

useEffect(() => {
    fetchTopics().then((topics) => {
        setTopics(topics)
    })
}, [])

    return (
        <section>
            {topics.map((topic) => {
                return (
                    <div key={topic.slug} className='display-box'>
                        <TopicCard topic={topic}/>
                    </div>
                )
            })}
        </section>
    )
}

export default TopicsList;
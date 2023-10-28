import { useState } from "react"
import { Form } from "./Form"
import { List } from "./List"

export const Hero = () => {

    const [info, setInfo] = useState([]);

    return (
        <main className="hero">
            <Form setInfo={setInfo} info={info} />
            <List setInfo={setInfo} info={info} />
        </main>
    )
}

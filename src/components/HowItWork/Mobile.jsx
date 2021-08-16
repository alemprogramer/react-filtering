import React, { useState,useEffect } from 'react'
import {Accordion, Card} from 'react-bootstrap';
import CommonHead ,{MiniHead} from "../../components/headings/index";
const Mobile = ({title, frequents, work}) => {
    
    const [obj, setObj] = useState([]);

    console.log('Render');
    useEffect(() => {
        if (frequents) {
            setObj(frequents)
        }

        console.log('ComponentDidMount');
        if (work) {
            setObj(work)
        }
       // eslint-disable-next-line
    }, []);
    return (
        <section className="hiw mobile">
            <div className="container">

                <CommonHead title={title}/> 
                <div className="row">
                    {work ? 
                         <div className="col-12">
                            <ul className="hiw_list">
                            {obj.map((h,k)=><li key={k++} className="hiw_items">
                                    <div className="hiw_img">
                                        <img src={h.image} className="img-fluid" alt="how.jpg"/>
                                    </div>
                                    <div className="content">

                                        <MiniHead title={h.title}/>

                                        <div className="texts">
                                            <p>
                                                {h.text}
                                            </p>
                                        </div>
                                    </div>
                                </li>)}
                            </ul>
                        </div>  : <div className="col-12 p00">
                        <Accordion defaultActiveKey="0">
                            {obj.map((hit, k) => <Card key={k}>
                                <Accordion.Toggle className='card-header' as={Card.Header} eventKey={`${k}`}>
                                    <span className="content">
                                        <span className="texts">
                                            <p>
                                                {hit.head}
                                            </p>
                                        </span>
                                    </span>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={`${k}`}>
                                    <Card.Body>
                                        <span className="detail_slide">
                                            <span className="text">
                                                <h6>
                                                    {hit.text}
                                                </h6>
                                            </span>
                                        </span>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>)}
                        </Accordion>
                    </div>}
                    </div>
                </div>
        </section>
    )

}

export default Mobile

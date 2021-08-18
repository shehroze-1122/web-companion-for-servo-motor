import React, {Fragment, useState} from 'react';
import './home.css';

const Home=()=>{
    const [xCount, setXCount] = useState(0);
    const [yCount, setYCount] = useState(0);
    const [zCount, setZCount] = useState(0);
    const [stepState, setStepState] = useState('');
    return(
        <Fragment>
            <div className="home-title text-uppercase">
                <h2>Web companion software development for servo motors and other controls </h2>
            </div>
            <div className="container">
            <div className="text-center macro-micro-stepper">
                <input type="radio" name="stepping" value="micro-stepping" checked={stepState==="microstepping"} />
                <button className="stepping-inputs btn btn-primary" value="microstepping" onClick={(e)=>setStepState(e.target.value)}>Micro Stepping</button>
                <input type="radio" name="stepping" value="macro-stepping" checked={stepState==="macrostepping"}/>
                <button className="stepping-inputs btn btn-danger" value="macrostepping" onClick={(e)=>setStepState(e.target.value)}>Macro Stepping</button>
            </div>

                <div className="row">
                    <div className="col-lg-6 col-12 xy-movement">
                        <p className="text-center">Horizontal and Vertical axis controller</p>
                        <div className="icons">
                            <button type="button" onClick={()=>setYCount(yCount+1)}><i class="fas fa-3x fa-arrow-up up"></i></button>
                            <div className="left-right">
                                <button type="button" onClick={()=>setXCount(xCount-1)}><i class="fas fa-3x fa-arrow-left left"></i></button>
                                <button type="button" onClick={()=>setXCount(xCount+1)}><i class="fas fa-3x fa-arrow-right right"></i></button>
                            </div>
                            <button type="button" onClick={()=>setYCount(yCount-1)}><i class="fas fa-3x fa-arrow-down down"></i></button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12 z-movement">
                        <p className="text-center">The z-axis movement controller</p>
                        <div className="icons">
                            <button type="button" onClick={()=>setZCount(zCount+1)}><i class="fas fa-3x fa-arrow-up up"></i></button>
                            <button type="button" onClick={()=>setZCount(zCount-1)}><i class="fas fa-3x fa-arrow-down down"></i></button>
                        </div>
                        
                    </div>
                </div>
                
                <button className="values-button x-value">X-Axis value: {xCount}</button>
                <button className="values-button y-value">Y-Axis value: {yCount}</button>
                <button className="values-button z-value">Z-Axis value: {zCount}</button>
            </div>
        </Fragment>
    );
}

export default Home;
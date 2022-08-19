import React from 'react';
import ComponentsRender from './componentsRender';
import Button from "../components/Button";

const Children2 = () => {
    return (
        <ComponentsRender>
            <div>
                <div>Soy children 2</div>
                <Button  width={"300"} height={"50"} name={"holasadas"} class="yellow"/>
               
               
            </div>
        </ComponentsRender>
    );
};

export default Children2;
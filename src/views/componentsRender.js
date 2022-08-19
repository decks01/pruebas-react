import React from 'react';

function Components({children}) {
    return (
        <div>
            <div>Estoy renderizando el children</div>
            <div>
                {children ? children :<div> No esta el children</div>}
            </div>
        </div>
    );
}

export default function ComponentsRender({children}){
    return <Components children={children}
    />
};




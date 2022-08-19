import React from 'react';

function Components({children}) {
    return (
        <div>
            <div>Estoy renderizando el children</div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default function ComponentsRender({children}){
    return <Components children={children}
    />
};




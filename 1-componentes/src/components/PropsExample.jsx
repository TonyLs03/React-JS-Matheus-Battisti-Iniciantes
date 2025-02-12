import React from 'react'

const PropsExample = ({nome, idade}) => {
  return (
    <div>
        <h3>
            Eae {nome}
        </h3>
        <p>Eu tenho {idade} anos.</p>
    </div>
  )
}

export default PropsExample

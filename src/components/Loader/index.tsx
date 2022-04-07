import React from 'react'
import ReactLoading from "react-loading";


interface Props {
  loading: boolean
}

const Loader: React.FC<Props> = ({ loading }) => {

  const translate = `translate(${-50}%, ${-50}%)`

  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', zIndex: '200', transform: translate }}>
      {loading ?
        <>
          {/* <ReactLoading type="balls" color="#0000FF"
            height={100} width={50} />
          <ReactLoading type="bars" color="#0000FF"
            height={100} width={50} />
          <ReactLoading type="bubbles" color="#0000FF"
            height={100} width={50} />
          <ReactLoading type="cubes" color="#0000FF"
            height={100} width={50} />
          <ReactLoading type="cylon" color="#0000FF"
            height={100} width={50} />
          <ReactLoading type="spin" color="#0000FF"
            height={100} width={50} /> */}
          <ReactLoading type="spokes" color="#a2b4d2"
            height={200} width={200} />
          {/* <ReactLoading
            type="spinningBubbles"
            color="#0000FF"
            height={100}
            width={50} /> */}
        </> : null
      }
    </div>
  )
}

export default Loader

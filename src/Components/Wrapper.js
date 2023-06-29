import Form from './Form'

const Wrapper = (props) => {


  const getData =(data) =>{
    props.dataGett(data)
  }

  return (
    <div>
      <Form onSubmit={getData}/>
    </div>
  )
}

export default Wrapper

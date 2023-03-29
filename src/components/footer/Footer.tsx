import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <div className='text-center' style={{backgroundColor: "#BAD0E3"}}>
        <div>
            <h3>JakpaWithAPlan</h3>   
        </div>
        <div>
            <p>“Cum nisl tellus risus bibendum vel. . Pellentesque suspendisse <br /> nunc proin ultrices
                neque sagittis. Cum nisl tellus risus bibendum vel. <br />  Pellentesque suspendisse 
                 nunc proin ultrices neque sagittis”</p>
        </div>
        <div>

        </div>
        <div>
            <Button className='' style={{backgroundColor: "#044163"}}>Home</Button>
            <Button  className='' style={{backgroundColor: "#044163"}}>About Us</Button>
            <Button className='' style={{backgroundColor: "#044163"}}>Service</Button>
            <Button  className='' style={{backgroundColor: "#044163"}}> Book A Service</Button>
        </div>
   </div>

  )
}

export default Footer
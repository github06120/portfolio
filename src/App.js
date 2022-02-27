import React from "react";

class App extends React.Component{
  render(){
    return(
      <div>
        <div>
                    <a style={{color: "blue"}}>HelloPage1!!!</a>
                </div>
                
                <br/>
                <Link to={`/page2`}>Go To page2</Link>
      </div>
    )
  }
}

export default App;

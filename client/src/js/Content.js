import React from 'react';

export class Content extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      blogObject:null
    };
  }

  componentDidMount(){
    this.callApi()
    .then(res => this.setState({ blogObject: res[0].title }))
    .catch(err => console.log(err));
  }

  callApi = async () =>{
    const response = await fetch('/api/posts');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    console.log(body)
    return body;
  }

  render(){
    return(
    <div className='App'>
      {this.state.blogObject}
    </div>
    )
  }

}
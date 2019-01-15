import React, {Component} from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

class Newsletter extends Component {
constructor(props){
    super(props);
    this.state = {
        showSuccess: false,
        showError: false,
        successMsg: '',
        errorMsg: ''
    }
}
 sleep = (delay) => {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
 }
 onSubmit = async (event) => {
     event.preventDefault();
     const email = event.target.yourmail.value || null;
    console.log(email);
     if(!email){
         return;
     }

     try{
         const result = await addToMailchimp(email,{});
         console.log(result.msg);
         this.setState({showSuccess: true});
         this.setState({successMsg: result.msg});
         this.setState({showError: false});
         this.setState({errorMsg: ''});
     }catch(err){
        console.log(err);
         this.setState({showSuccess: false});
         this.setState({successMsg: ''});
         this.setState({showError: true});
         this.setState({errorMsg: err});
     }
 }
 render(){
     return(
         <>
        <form onSubmit={this.onSubmit}>
            <div className="input-group input-group-newsletter">
                <input name="yourmail" type="email" className="form-control" placeholder="Enter email..." aria-label="Enter email..." aria-describedby="basic-addon" />
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="submit">Notify Me!</button>
                </div>
            </div>
        </form>
        <br/>
        <div className={this.state.showSuccess? 'alert alert-success':'alert alert-success hideme'} dangerouslySetInnerHTML={{__html:this.state.successMsg}} />
        <div className={this.state.showError? 'alert alert-danger':'alert alert-danger hideme'} dangerouslySetInnerHTML={{__html:this.state.errorMsg}} />
     </>
     )
 }
}

export default Newsletter
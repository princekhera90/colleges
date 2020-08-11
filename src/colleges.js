import React from 'react';
import CollegeCard from './college-card';
import data from './data/colleges.json'
import './colleges.css' 

class Colleges extends React.Component{
    constructor(){
        super()
        this.state = {colleges : JSON.parse(JSON.stringify(data.colleges)),
                        pageNumber : 1,
                        showData : [],
                        loading : false
                        }
        window.addEventListener('scroll', this.infiniteScroll)
    }

    infiniteScroll=()=>{
        if(this.state.showData.length<this.state.colleges.length && !this.state.loading){
        //console.log(window.innerHeight  +  document.documentElement.scrollTop,  document.documentElement.offsetHeight - cardHeight)
            if(Math.ceil(window.innerHeight + document.documentElement.scrollTop)===document.documentElement.offsetHeight) {
                this.setState({loading: true})
                setTimeout(()=>{
                    this.getData(this.state.pageNumber+1)
                    this.setState({loading : false, pageNumber : this.state.pageNumber+1})
                },2000)
            }
        }
    }
    
    getData=(pageNumber)=>{
        debugger
        const start = (pageNumber-1)*10
        const end = (pageNumber)*10 < this.state.colleges.length ? pageNumber*10 : this.state.colleges.length
        console.log(this.state.colleges.slice(start,end))
        console.log(start, end)
        this.setState({showData : [...this.state.showData, ...this.state.colleges.slice(start, end)]})
    }   

    componentDidMount(){
        this.getData(this.state.pageNumber)
    }

    render(){
        return(<React.Fragment>
            <div class="base">
                <div class="heading">
                    <h3>Colleges in North India</h3>
                </div>
                {this.state.showData.length > 0 && <div class="colleges">
                    {this.state.showData.map(college=>{
                        return(<CollegeCard college={college}></CollegeCard>)
                    })}
                </div>}
                {this.state.loading &&  <div className = "loading">Loading...</div>}
            </div>
        </React.Fragment>)
    }
}

export default Colleges
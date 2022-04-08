import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppInfo from '../page1/app-info/app-info';
import SearchPanel from '../page1/search-panel/search-panel';
import AppFilter from '../page1/app-filter/app-filter';
import EmployeesList from '../page1/employees-list/employees-list';
import EmployeesAddForm from '../page1/employees-add-form/employees-add-form';

import 'bootstrap/dist/css/bootstrap.min.css';
//import Navbars from '../navbar/navbar';

import './app.css';
//import Navbars from '../navbar/navbar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Monobamk', salary: 800, interest:3, increase: false, rise: true, id: 1},
                {name: 'ПриватБа́нк ', salary: 3000,interest:10, increase: true, rise: false, id: 2},
                {name: 'Оща́дбанк', salary: 5000, interest:5,increase: false, rise: false, id: 3}
            ],
            term:'',
            filter:'all'
        }
        this.maxId = 6;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    // Да, пока могут добавляться пустые пользователи. Мы это еще исправим
    addItem = (name, salary,interest,maxKredit,time) => {
        const newItem = {
            name, 
            salary,
            interest,
            maxKredit,
            time,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }
    searchEmp =(items,term) =>{
        if(term.length === 0){
        return items;
        }
        return items.filter(item =>{
            return item.name.indexOf(term) > -1
        })
    }
    onUpdateSearch = (term) => {
        this.setState({term});
    }
    filterPost =(items,filter)=>{
        switch(filter){
            case 'rise':
            return items.filter(item=>item.rise);
            case 'moreThen1000':
                return items.filter(item=>item.salary > 1000);
                default:
                    return items
        }
    }
    onFilterSelect =(filter) =>{
        this.setState({filter})
    }
    render() {
        const {data,term,filter}= this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data,term),filter);
        return (
            <div className="app">
           
    
               <Router>
  

    
    
   
    </Router>
                <AppInfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
             
            </div>
          
        );
    }
}

export default App;
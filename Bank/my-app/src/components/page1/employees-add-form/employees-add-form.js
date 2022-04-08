import { Component } from 'react';

//import './employees-add-form.css';

import './employees-add-form.scss'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            interest:''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // Можно еще и сообщения добавлять, подсветку, атрибуты minlength и тд.
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary,this.state.interest);
        this.setState({
            name: '',
            salary: '',
            interest:''
        })
    }

    render() {
        const {name, salary,interest} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавити новий банк</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Назва банку"
                        name="name"
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Перший внесоквнесок"
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}/>
                           <input type="number"
                        className="form-control new-post-label"
                        placeholder="Відсоткова ставка"
                        name="interest"
                        value={interest} 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;
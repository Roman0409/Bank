import "./app-info.css";
import {Button} from 'react-bootstrap'

const AppInfo = ({increased, employees,onClick}) => {
    return (
        <div className="app-info">
            <h1>Усі банки</h1>
            <h2>Загальне число банків {employees}</h2>
            <h2>Вибрані  банки (нажміть на печиво): {increased}</h2>
            <Button href="http://127.0.0.1:5500/index.html">
   Розрахувати іпотеку 
</Button>
           
        </div>
    )
}

export default AppInfo;
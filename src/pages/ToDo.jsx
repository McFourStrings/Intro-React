import '../style/style.css'
import { useEffect, useState } from 'react';

const CompteurAmeliore = () => {

    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState({})
    const [state,setState]=useState("Toutes")

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, { id: tasks.length + 1, title: task.title, done: false }])
        

    }

    const handleChange = (element)=>{
        
        let elementToChange=tasks.findIndex((e)=> {
            return e.id == element.id;
        })           
      
        // newTasks va contenir toutes mes taches, les anciennes et celles modifiées
        let newTasks = [...tasks] ;
        // newTasks[elementToChange] c'est l'object {id: ,title: ,done: } que je vais modifier
        newTasks[elementToChange]= {
            // copie colle l'object
        ... newTasks[elementToChange],
        // Je change la valeur de done en mettant l'inverse de la valeur actuelle (true devient false et vice versa)
            done: !newTasks[elementToChange].done
        }

        setTasks(newTasks);       

    }

    const handleDelete = (element)=>{
        // Trouve la position de mon element dans le tableau
        let elementIndex = tasks.findIndex((e)=>{
            return e.id == element.id;
        })
        // Copie le tableau
        let newTasks = [...tasks];
        // Supprimer l'element
        newTasks.splice(elementIndex,1);
        setTasks(newTasks)
    }

    return <>
        <h2>Ma To Do List</h2>
        <form onSubmit={handleSubmit}>
            <input value={task.title} type="text" onChange={(e) => { setTask({ title: e.target.value }) }} />
            <input type="submit" />
        </form>

        <label htmlFor="state" style={{color:"white"}}>Filtrer</label>
        <select name="state" id="state" value={state} onChange={(e)=>{setState(e.target.value)}}>
            <option value="Toutes">Toutes</option>
            <option value="Actives">Actives</option>
            <option value="Terminées">Terminées</option>
        </select>

        {tasks.map((element) => {
           
                if (state=="Actives" && element.done == false){
            return <li key={element.id} style={{ textDecoration: element.done ? 'line-through' : 'none' }} >{element.title} <input checked={element.done} type='checkbox' onChange={()=>{handleChange(element)}} />
             <button onClick={()=>{handleDelete(element)}}>Delete</button></li>
                } else if (state== "Terminées" && element.done == true){
 return <li key={element.id} style={{ textDecoration: element.done ? 'line-through' : 'none' }} >{element.title} <input checked={element.done} type='checkbox' onChange={()=>{handleChange(element)}} />
             <button onClick={()=>{handleDelete(element)}}>Delete</button></li>
                } else if (state=="Toutes" ){
                     return <li key={element.id} style={{ textDecoration: element.done ? 'line-through' : 'none' }} >{element.title} <input checked={element.done} type='checkbox' onChange={()=>{handleChange(element)}} />
             <button onClick={()=>{handleDelete(element)}}>Delete</button></li>
                }

        })}

    </>
}
export default CompteurAmeliore;
import './AppTodo.scss';
import ListTodo from './ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddTodo from './AddTodo';

/**
 * 2 components: class component / function component ( function, arrow)
 * JSX
 */

function AppTodo() {
    // const  App = () =>  {
    return (
        <div className="App">
            <header className="App-header">
                <img className="App-logo" alt="logo" />
                <p>
                    Simple TODO Apps with React.js (Eric &amp; Hoi Dan IT)
                </p>

                {/* <MyComponent /> */}
                <ListTodo />

            </header>


            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default AppTodo;

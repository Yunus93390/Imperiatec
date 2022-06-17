import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul className="nav">
      <img src="logoimp.png" className="logo"/>
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Log in</a>
        </li>
      </ul>
      <header className='App-header'>
      
      
      <table>
        <tr>
        <td>
        <form className='form'>
          <div class="form-group">
            <h1>Register</h1>
            <hr color='white'></hr>
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" maxlength="50" placeholder='Name'/>
          </div>

          <div class="form-group">
            <label for="firstName">First name</label>
            <input type="text" class="form-control" id="firstName" maxlength="50" placeholder='First name'/>
          </div>
          
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" class="form-control" id="age" placeholder='Age'/>
          </div>
        
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Email'/>
          </div>
    
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password'/>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </td>
        
        <td>
        <form className='form2'>
          <div class="form-group">
            <h1>Log in</h1>
            <hr color='white'></hr>
          </div>
          
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Email'/>
          </div>
    
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password'/>
          </div>
        
          <button type="submit" class="btn btn-primary">Log in</button>
        </form>
        </td>
        </tr>
        </table>


      </header>
    </div>
  );
}

export default App;

function App(){
  return <center className="todo-container">
    Todo App
    <div class="container text-center">
  <div class="row">
    <div class="col-6">
      <input type="text" placeholder="Enter todo Here" />
    </div>
    <div class="col-4">
      <input type="date"  />
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-success">Add
      </button>
    </div>
  </div>
   <div class="row">
    <div class="col-6">
    Read Book
    </div>
    <div class="col-4">
      25/07/2025
    </div>
    <div class="col-2">
      
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>
   <div class="row">
    <div class="col-6">
    Watch Movie
    </div>
    <div class="col-4">
    24/07/2025
    </div>
    <div class="col-2">
         <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>
</div>
  </center>

}

export default App;
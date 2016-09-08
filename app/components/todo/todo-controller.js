(function(){
	
	var todoService = new TodoService();

	var todos= todoService.getTodos()

	$('.todo-form').on('submit', function(e) {
 		e.preventDefault()
 		var form = this;
 		var input = form.toDoInput.value; 
		

 		todos.push(input);
 		todoService.saveTodos(todos);
 		update();

		
 	})

	 $('.clear-tasks').on('click', function () {
		 todos = [];
		 update()
	 })

	 $('.todo-list').on('click', '.item', function() {
		 var id = $(this).data('id')
		 var task = removeTask(id);
		 update();
	 })

	 function removeTask(id) {
		for (var i =0; i <todos.length; i++) {
			var item = todos[i];
			if (i == id) {
				return todos.splice(i, 1)
			}
		}
		todoService.saveTodos(todos)
		update();
	}

	
	function update() {
		$('.todo-list').empty();
		$('#toDoInput').val('');
		var total = todos.length
		for(var i=0; i < todos.length; i++) {
			var out = todos[i]
			$('.todo-list').append(`
				<li class="item" data-id="${i}">
				<h5>${out}</h5>
				</li>
			`)
		}
			$('.todo-list').prepend(`
			<h4>Total Tasks: ${total}</h4>
			`)
	}

	update()
	
}())





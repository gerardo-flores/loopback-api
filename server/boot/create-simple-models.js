module.exports = function(app) {
  app.dataSources.db.automigrate('Task', function(err) {
    if (err) throw err;
 
    app.models.Task.create([
      {name: 'Task A'},
      {name: 'Task B'},
      {name: 'Task C'},
    ], function(err, tasks) {
      if (err) throw err;
 
      console.log('Models created: \n', tasks);
    });
  });
};
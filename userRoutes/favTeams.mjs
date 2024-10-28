//Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. 
//At least one data collection should allow for client manipulation via a PATCH or PUT request.
router.teams('/', (req, res) => {
    
    if (req.body.userId && req.body.title && req.body.content) {
      const post = {
        id: teams[teams.length - 1].id + 1,
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
      };
  
      teams.push(teams);
      res.json(teams[teams.length - 1]);
    }  
  });
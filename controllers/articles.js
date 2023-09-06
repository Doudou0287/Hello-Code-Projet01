import Article from "../Models/Article";
export const index = async (req, res) => {
    try {
        let userId = req.session.userId 
        // Retrieve articles from the database
        const articles = await Article.find({}).limit(10);
        const tableSize = await Article.countDocuments();
    
        // Send the articles as JSON response
        res.render('home/index', { articles, userId, tableSize });
    } catch (error) {
        // Handle errors and send an error response if necessary
        console.error('Error fetching articles:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



export const loadMoreArticles = async (req, res) => {
    try {
        
        const page = parseInt(req.params.numberArticles); // Get the page number from the URL
        const itemsPerPage = 10; // Number of items per page
        let userId = req.session.userId 
        // Calculate the skip value to retrieve the correct set of articles
        const skip = page * itemsPerPage;
        const tableSize = await Article.countDocuments();
        // Retrieve articles for the current page
        const articles = await Article.find({}).skip(skip).limit(itemsPerPage);

        // Send the articles as a JSON response
        res.render('home/index', { articles, userId, tableSize })
    } catch (error) {
        // Handle errors and send an error response if necessary
        console.error('Error fetching next articles:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


export const getCategoryArticles = async (req, res) => {
    try {
      const { tag } = req.params;
      let tableSize

      const articles = await Article.find({ tags: tag });
     
      res.render('home/index', { articles , tableSize })
    } catch (error) {
      console.error('Error fetching articles by tag:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
}
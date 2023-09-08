import Article from "../Models/Article";
import { formatDate,checkToken } from "../utils/utils.js";

export const listeArticle = async (req, res) => {
    try {
        let tag
        const token = req.session.token;
        let userRole = checkToken(token)
        // Retrieve articles from the database
        const articles = await Article.find({}).limit(10);
        const tableSize = await Article.countDocuments();
    
        // render the articles page with articles passing to the front end
        res.render('articles/allArticles', { articles, userRole, tag, tableSize, formatDate});
    } catch (error) {
        // Handle errors and send an error response if necessary
        console.error('Error fetching articles:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



export const loadMoreArticles = async (req, res) => {
    try {
        let tag
        const page = parseInt(req.params.numberArticles); // Get the page number from the URL
        const itemsPerPage = 10; // Number of items per page
        const token = req.session.token;
        let userRole = checkToken(token)
        // Calculate the skip value to retrieve the correct set of articles
        const skip = page * itemsPerPage;
        const tableSize = await Article.countDocuments();
        // Retrieve articles for the current page
        const articles = await Article.find({}).skip(skip).limit(itemsPerPage);

        // Send the articles as a JSON response
        res.render('articles/allArticles', { articles, userRole,tag, tableSize, formatDate })
    } catch (error) {
        // Handle errors and send an error response if necessary
        console.error('Error fetching next articles:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


export const getCategoryArticles = async (req, res) => {
    try {
        const token = req.session.token;
        let userRole = checkToken(token)
        
        const { tag } = req.params;
        let tableSize

        const articles = await Article.find({ tags: tag });
        
        res.render('articles/allArticles', { articles, userRole , tag, tableSize, formatDate })
    } catch (error) {
        console.error('Error fetching articles by tag:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


export const getSingleArticle = async (req, res) => {
    const articleId = req.params.id.toString();
    const token = req.session.token;
    let userRole = checkToken(token)
    try {
        // Find the article by ID using findOne
        const article = await Article.findById(articleId);

        if (!article) {
            // Handle article not found
            return res.status(404).send('Article not found');
        }

        // Render the article page template with article data
        res.render('articles/singleArticle', { article, formatDate, userRole });
    } catch (error) {
        // Handle any errors that may occur during the database query
        console.error('Error fetching article:', error);
        res.status(500).send('Internal server error');
    }
}

export const renderArticleForm = (req, res) => {
    const token = req.session.token;
    let userRole = checkToken(token)
    res.render('articles/createArticle', { userRole }); // You may need to create a view for the article creation form
};

export const createArticle = async (req, res) => {
    const { title, summary, content, tags, hasQCM } = req.body;
    const token = req.session.token;
    const userRole = checkToken(token); // Assuming you have a function to check the user's role
  
    try {
      // Check if the user has permission to create an article (e.g., only admins can create)
      if (userRole !== 'admin') {
        return res.status(403).send('Permission denied');
      }
      const tagsArray = tags.split(',').map(tag => tag.trim());
      // Create a new article based on the submitted data
      const article = new Article({
        title,
        summary,
        content,
        tags: tagsArray,
        hasQCM,
      });
  
      // Save the new article to the database
      await article.save();
  
      // Redirect to the newly created article's page or to the articles list
      res.redirect(`/articles/${article._id}`);
    } catch (error) {
      // Handle any errors that may occur during article creation
      console.error('Error creating article:', error);
      res.status(500).send('Internal server error');
    }
};

export const renderUpdateArticleForm = async (req, res) => {
    const articleId = req.params.id.toString();
    const token = req.session.token;
    let userRole = checkToken(token);

    try {
        // Find the article by ID using findById
        const article = await Article.findById(articleId);

        if (!article) {
            // Handle article not found
            return res.status(404).send('Article not found');
        }

        // Render the update article form with pre-filled data
        res.render('articles/editArticle', { article, userRole });
    } catch (error) {
        // Handle any errors that may occur during the database query
        console.error('Error rendering update form:', error);
        res.status(500).send('Internal server error');
    }
}

export const updateArticle = async (req, res) => {
    const articleId = req.params.id.toString();
    let qcm
    const { title, summary, content, tags, hasQCM } = req.body;
    console.log('------------------------', hasQCM)
    if(hasQCM === "on"){
        qcm = true
    }else{
        qcm = false
    }
    const tagsArray = tags.split(',').map(tag => tag.trim());
    try {
        // Find the article by ID using findByIdAndUpdate
        const article = await Article.findByIdAndUpdate(
            articleId,
            {
                title,
                summary,
                content,
                tags: tagsArray,
                hasQCM: qcm,
                lastModifiedDate: Date.now(),
            },
            { new: true } // Return the updated article
        );

        if (!article) {
            // Handle article not found
            return res.status(404).send('Article not found');
        }

        // Redirect to the updated article page or wherever you want
        res.redirect(`/articles/${articleId}`);
    } catch (error) {
        // Handle any errors that may occur during the database update
        console.error('Error updating article:', error);
        res.status(500).send('Internal server error');
    }
}


export const deleteArticle = async (req, res) => {
    const articleId = req.params.id.toString();

    try {
        // Find the article by ID using findByIdAndRemove
        const article = await Article.findByIdAndRemove(articleId);

        if (!article) {
            // Handle article not found
            return res.status(404).send('Article not found');
        }

        // Redirect to a page or route after successful deletion
        res.redirect('/articles'); // You can specify a different route if needed
    } catch (error) {
        // Handle any errors that may occur during the database delete operation
        console.error('Error deleting article:', error);
        res.status(500).send('Internal server error');
    }
}

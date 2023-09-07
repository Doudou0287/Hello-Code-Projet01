import Article from "../Models/Article";
// import jwt from "jsonwebtoken";
import { formatDate,checkToken } from "../utils/utils.js";
export const index = async (req, res) => {
    try {
        let tag
        const token = req.session.token;
        let userRole = checkToken(token)
        // Retrieve articles from the database
        const articles = await Article.find({}).limit(10);
        const tableSize = await Article.countDocuments();
    
        // render the articles page with articles passing to the front end
        res.render('home/index', { articles, userRole, tag, tableSize, formatDate});
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
        res.render('home/index', { articles, userRole,tag, tableSize, formatDate })
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
        
        res.render('home/index', { articles, userRole , tag, tableSize, formatDate })
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
        res.render('home/singleArticle', { article, formatDate, userRole });
    } catch (error) {
        // Handle any errors that may occur during the database query
        console.error('Error fetching article:', error);
        res.status(500).send('Internal server error');
    }
}
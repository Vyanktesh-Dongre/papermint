
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const { method, query } = req;

  switch (method) {
    case 'GET':
      await handleGetRequest(query, res);
      break;
    case 'POST':
      // POST not allowed for this endpoint
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function handleGetRequest(query, res) {
  try {
    const client = await clientPromise;
    const db = client.db('blogDB');

    // Extract and clean filter parameters from query string
    const selectedCategories = query.categories ? query.categories.split(',').map(category => category.trim()) : [];
    const blogId = query.id;
    const title = query.title; // New addition: Retrieve title query parameter

    // Prepare filter based on selected categories, blog ID, or title
    const filter = {};

    if (blogId) {
      // Filter by blog ID
      filter.id = parseInt(blogId);
    } else if (selectedCategories.length > 0) {
      // Filter by selected categories
      filter.category = {
        $in: selectedCategories.map(category => new RegExp(category, 'i'))
      };
    } else if (title) {
      // Filter by title (case-insensitive)
      filter.title = new RegExp(title, 'i');
    }

    // Fetch blogs based on filter
    const blogs = await db.collection('blogs').find(filter).toArray();

    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

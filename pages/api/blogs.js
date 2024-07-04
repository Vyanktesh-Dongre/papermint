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

    // // Debugging: Log selected categories
    // console.log('Selected Categories:', selectedCategories);

    // Prepare filter based on selected categories
    const filter = {};

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      // Use case-insensitive regular expressions to match categories
      filter.category = {
        $in: selectedCategories.map(category => new RegExp(category, 'i'))
      };
    }

    // Fetch blogs based on filter
    //const blogs = await db.collection('blogs').find(filter).limit(9).toArray();
    const blogs = await db.collection('blogs').find(filter).toArray();

    // Debugging: Log fetched blogs
    console.log('Filtered Blogs:', blogs);

    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

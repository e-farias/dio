import { supabase } from '../services/api'

export const getPosts = async () => {
	
	const { data: posts, error } = await supabase.from('posts').select('*')

	if (error) {
		console.log('error: [❌️] getPosts:', error.message)
		return []
	}

	return posts
}

export const getPostById = async (id) => {
	
	const { data: post, error } = await supabase.from('posts')
		.select('*')
		.eq('id', id)
		.single()

	if (error) {
		console.log(`error: [❌️] getPostById:`, error.message)
		return null
	}

	return post || null
}
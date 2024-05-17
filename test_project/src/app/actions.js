'use server'

import { permanentRedirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'

export async function updateUsername(username, formData) {
    try {
        // Call database
    } catch (error) {
        // Handle errors
    }

    revalidateTag('username') // Update all references to the username
    permanentRedirect(`/profile/${username}`) // Navigate to the new user profile
}
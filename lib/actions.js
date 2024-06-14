'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const { saveMeal } = require('./meals');

const isInvalidText = (text) => {
    return !text || text.trim() === '';
};

export const shareMeal = async (perv, formData) => {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    };

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        meal.image.size === 0 ||
        !meal.creator_email.includes('@') ||
        !meal.image
    ) {
        return {
            message: 'Invalid Input.',
        };
    }

    await saveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');
};

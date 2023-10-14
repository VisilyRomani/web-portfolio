import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Michael Wong' })).toBeVisible();
});

test('projects page available', async ({ page }) => {
	await page.goto('/projects');
	await expect(page).toHaveTitle(/Projects/);
});

test('about page available', async ({ page }) => {
	await page.goto('/about');
	await expect(page).toHaveTitle(/About/);
});

test('Contact page available', async ({ page }) => {
	await page.goto('/contact');
	await expect(page).toHaveTitle(/Contact/);
});

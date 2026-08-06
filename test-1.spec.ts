import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('banner').getByRole('link', { name: 'Связаться' }).click();
    await page.getByRole('textbox', { name: 'Имя' }).click();
    await page.getByRole('textbox', { name: 'Имя' }).fill('asd');
    await page.getByRole('textbox', { name: 'Сообщение' }).click();
    await page.getByRole('textbox', { name: 'Сообщение' }).fill('asd');
});
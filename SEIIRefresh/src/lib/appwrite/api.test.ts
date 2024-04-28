import { Builder, By, Capabilities, until } from 'selenium-webdriver';
import { createUserAccount } from './api'; // Import your function here
import { INewUser } from './config'; // Import your types/interfaces here

const user: INewUser = {
    email: 'test@example.com',
    password: 'password123',
    name: 'Test User',
    username: 'testuser',
};

async function testCreateUserAccount() {
    let driver = await new Builder().withCapabilities(Capabilities.chrome()).build();
    try {
        await driver.get('http://localhost:5173/'); // Replace with your testing environment URL

        // Fill in the user details in the registration form
        await driver.findElement(By.id('email')).sendKeys(user.email);
        await driver.findElement(By.id('password')).sendKeys(user.password);
        await driver.findElement(By.id('name')).sendKeys(user.name);
        await driver.findElement(By.id('username')).sendKeys(user.username);

        // Call the createUserAccount function
        const newUser = await createUserAccount(user);

        // Perform assertions on the newUser object or behavior
        if (newUser !== null && typeof newUser === 'object' && 'email' in newUser) {
            console.log('Test passed: User account created successfully');
        } else {
            console.error('Test failed: User account creation failed');
        }
    } catch (error) {
        console.error('Error during test:', error);
    } finally {
        await driver.quit();
    }
}

testCreateUserAccount();
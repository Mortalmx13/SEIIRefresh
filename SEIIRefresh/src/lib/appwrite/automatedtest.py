from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
import requests
import time

user = {
    'email': 'Selenium@example.com',
    'password': 'password123',
    'name': 'Guy Test',
    'username': 'seleniumtester'
}

# Setup WebDriver using ChromeDriverManager
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

driver.get('http://localhost:5173/')
print("Page title:", driver.title)

link = driver.find_element(By.LINK_TEXT, "Sign Up")
if link:
    print("Sign Up link found.")
else:
    print("Sign Up link not found.")

link.click()

driver.find_element(By.ID, ':r2:-form-item').send_keys(user['name'])
time.sleep(5)
driver.find_element(By.ID, ':r3:-form-item').send_keys(user['username'])
time.sleep(5)
driver.find_element(By.ID, ":r4:-form-item").send_keys(user['email'])
time.sleep(5)
driver.find_element(By.ID, ':r5:-form-item').send_keys(user['password'] + Keys.ENTER)

print("Name field value:", driver.find_element(By.ID, ':r2:-form-item').get_attribute("value"))
print("Username field value:", driver.find_element(By.ID, ':r3:-form-item').get_attribute("value"))
print("Email field value:", driver.find_element(By.ID, ":r4:-form-item").get_attribute("value"))
print("Password field value:", driver.find_element(By.ID, ':r5:-form-item').get_attribute("value"))

time.sleep(10)

if "success" in driver.current_url:
    print("Sign up successful.")
else:
    print("Sign up failed.")

print("Current URL:", driver.current_url)

driver.quit()

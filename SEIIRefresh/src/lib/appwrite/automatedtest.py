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
link = driver.find_element(By.LINK_TEXT, "Sign Up")
link.click()

driver.find_element(By.ID, ':r2:-form-item').send_keys(user['name'])
time.sleep(5)
driver.find_element(By.ID, ':r3:-form-item').send_keys(user['username'])
time.sleep(5)
driver.find_element(By.ID, ":r4:-form-item").send_keys(user['email'])
time.sleep(5)
driver.find_element(By.ID, ':r5:-form-item').send_keys(user['password'] + Keys.ENTER)



time.sleep(10)
 
driver.quit()
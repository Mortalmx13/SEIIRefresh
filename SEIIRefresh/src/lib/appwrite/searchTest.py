from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import requests
import time

user = {
    'email': 'Selenium@example.com',
    'password': 'password123',
    
}

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

driver.get('http://localhost:5173/')

driver.find_element(By.ID, ":r0:-form-item").send_keys(user['email'])
time.sleep(3)
driver.find_element(By.ID, ":r1:-form-item").send_keys(user['password'] + Keys.ENTER)
time.sleep(3)

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
    
}

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

driver.get('http://localhost:5173/')

driver.find_element(By.ID, ":r0:-form-item").send_keys(user['email'])
time.sleep(3)
driver.find_element(By.ID, ":r1:-form-item").send_keys(user['password'] + Keys.ENTER)
time.sleep(3)


home = driver.find_element(By.PARTIAL_LINK_TEXT, "/")
home.click()
editPost = driver.find_element(By.PARTIAL_LINK_TEXT, "/update-post/662c2d49da50e1284988")
editPost.click()

WebDriverWait(driver, 5)

driver.find_element(By.ID, ":r6:-form-item-description").send_keys("Whipped Lemonade - Test")
time.sleep(2)

updatePost = driver.find_element(By.TYPE, "submit")
updatePost.click()

time.sleep(10)

driver.quit()

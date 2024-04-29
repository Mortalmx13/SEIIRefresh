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

print("Browser launched successfully.")

try:
    driver.get('http://localhost:5173/')
    print("Navigated to the website.")

    driver.find_element(By.ID, ":r0:-form-item").send_keys(user['email'])
    print("Email entered: ", user['email'])
    time.sleep(3)

    driver.find_element(By.ID, ":r1:-form-item").send_keys(user['password'] + Keys.ENTER)
    print("Password entered and submitted.")
    time.sleep(3)

    shopping_list_link = driver.find_element(By.CSS_SELECTOR, 'a[href="/shopping-list"]')
    shopping_list_link.click()
    print("Navigated to Shopping List.")
    time.sleep(3)

    input_field = driver.find_element(By.CSS_SELECTOR, 'input[placeholder="Enter an Item"]')
    input_field.send_keys("Strawberry")
    print("Entered Strawberry into the item field")
    time.sleep(3)

    add_button = driver.find_element(By.XPATH, "//button[contains(@class,'bg-primary') and contains(text(), 'Add')]")
    add_button.click()
    print("Clicked on the Add button.")
    time.sleep(7)

finally:
    driver.quit()
    print("Browser closed.")